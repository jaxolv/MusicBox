import Router from "express";

// validator:
// import PrimaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";
// import ForeignKeyValidator from "../../middlewares/id/ForeignKeyValidator";

// controllers:
import CreateSongwriterController from "../../app/controllers/songwriters/CreateSongwriterController";
import ListSongwritersController from "../../app/controllers/songwriters/ListSongwritersController";
import UpdateSongwriterController from "../../app/controllers/songwriters/UpdateSongwriterController";
import DeleteSongwriterController from "../../app/controllers/songwriters/DeleteSongwriterController";

const routes = new Router();

// instâncias:
const createSongwriterController = new CreateSongwriterController();
const listSongwritersController = new ListSongwritersController();
const updateSongwriterController = new UpdateSongwriterController();
const deleteSongwriterController = new DeleteSongwriterController();

// CRUD:
routes.post("/songwriters", (req, res) =>
    createSongwriterController.create(req, res)
);
routes.get("/songwriters", (req, res) =>
    listSongwritersController.listAll(req, res)
);
routes.get("/songwriters/:id", (req, res) =>
    listSongwritersController.listFromSong(req, res)
);
routes.delete("/songwriters/:id", (req, res) =>
    deleteSongwriterController.delete(req, res)
);
routes.put("/songwriters/:id", (req, res) =>
    updateSongwriterController.update(req, res)
);

export default routes;
