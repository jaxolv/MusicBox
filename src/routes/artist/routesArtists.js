import Router from "express";
import multer from "multer";

// upload files:
import UploadFileController from "../../app/upload/UploadFileController"
import multerConfig from "../../config/multer"

const uploadFile = multer({ storage: multerConfig })

// validator:
import ArtistsValidator from "../../middlewares/artist/ArtistsValidator";
import PrimaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";

// controllers:
import CreateArtistController from "../../app/controllers/artist/CreateArtistController";
import ListArtistsController from "../../app/controllers/artist/ListArtistsController";
import UpdateArtistController from "../../app/controllers/artist/UpdateArtistController";
import DeleteArtistController from "../../app/controllers/artist/DeleteArtistController";


const routes = new Router();

// instâncias:
const createArtistController = new CreateArtistController();
const listArtistsController = new ListArtistsController();
const updateArtistController = new UpdateArtistController();
const deleteArtistController = new DeleteArtistController();

// CRUD:
routes.post("/artists",
    ArtistsValidator, (req, res) =>
    createArtistController.create(req, res)
);
routes.get("/artists", (req, res) =>
    listArtistsController.listAll(req, res)
);
routes.put("/artists/:id",
    PrimaryKeyValidator, ArtistsValidator, (req, res) =>
    updateArtistController.update(req, res)
);
routes.delete("/artists/:id",
    PrimaryKeyValidator, (req, res) =>
    deleteArtistController.delete(req, res)
);

routes.post("/uploads", uploadFile.single("file"), (req, res) =>
    UploadFileController.storeFile(req, res)
);

export default routes;