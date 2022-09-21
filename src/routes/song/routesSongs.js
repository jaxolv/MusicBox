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
import CreateSongController from "../../app/controllers/song/CreateSongController";
import DeleteSongController from "../../app/controllers/song/DeleteSongController";
import ListSongsController from "../../app/controllers/song/ListSongsController";
import UpdateSongController from "../../app/controllers/song/UpdateSongController";

const routes = new Router();

// instâncias:
const createSongController = new CreateSongController();
const deleteSongController = new DeleteSongController();
const listSongsController = new ListSongsController();
const updateSongController = new UpdateSongController();

// CRUD:
routes.post("/songs", (req, res) =>
    createSongController.create(req, res)
);
routes.get("/songs", (req, res) =>
    listSongsController.listAll(req, res)
);
routes.get("/songs/:id", (req, res) =>
    listSongsController.listByIdAlbum(req, res)
)
routes.put("/songs/:id", (req, res) =>
    updateSongController.update(req, res)
);
routes.delete("/songs/:id", (req, res) =>
    deleteSongController.delete(req, res)
);

routes.post("/uploads", uploadFile.single("file"), (req, res) =>
    UploadFileController.storeFile(req, res)
);

export default routes;