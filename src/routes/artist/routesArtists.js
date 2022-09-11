import Router from "express";
import multer from "multer";

// upload files:
import multerConfig from "../../config/multer"
const uploadFile = multer({ storage: multerConfig })

// validator:

// controllers:
import CreateArtistController from "../../app/controllers/artist/CreateArtistController";
import ListArtistsController from "../../app/controllers/artist/ListArtistsController";
import UpdateArtistController from "../../app/controllers/artist/UpdateArtistController";
import DeleteArtistController from "../../app/controllers/artist/DeleteArtistController";

import UploadFileController from "../../app/upload/UploadFileController"

const routes = new Router();

// instâncias:
const createArtistController = new CreateArtistController();
const listArtistsController = new ListArtistsController();
const updateArtistController = new UpdateArtistController();
const deleteArtistController = new DeleteArtistController();

// CRUD:
routes.post("/artists", (req, res) =>
    createArtistController.create(req, res)
);
routes.get("/artists", (req, res) =>
    listArtistsController.listAll(req, res)
);
routes.put("/artists/:id", (req, res) =>
    updateArtistController.update(req, res)
);
routes.delete("/artists/:id", (req, res) =>
    deleteArtistController.delete(req, res)
);

routes.post("/uploads", uploadFile.single("file"), (req, res) =>
    UploadFileController.storeFile(req, res)
);

export default routes;