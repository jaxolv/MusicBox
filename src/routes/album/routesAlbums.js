import Router from "express";

// validator:
import PrimaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";
import ForeignKeyValidator from "../../middlewares/id/ForeignKeyValidator";

// controllers:
import CreateAlbumController from "../../app/controllers/album/CreateAlbumController";
import ListAlbumsController from "../../app/controllers/album/ListAlbumsController";
import UpdateAlbumController from "../../app/controllers/album/UpdateAlbumController";
import DeleteAlbumController from "../../app/controllers/album/DeleteAlbumController";

const routes = new Router();

// instâncias:
const createAlbumController = new CreateAlbumController();
const listAlbumsController = new ListAlbumsController();
const updateAlbumController = new UpdateAlbumController();
const deleteAlbumController = new DeleteAlbumController();

// CRUD:
routes.post("/albums", (req, res) =>
    createAlbumController.create(req, res)
);
routes.get("/albums/:id", (req, res) =>
    listAlbumsController.listByIdBand(req, res)
);
routes.get("/albums", (req, res) =>
    listAlbumsController.listByNameBand(req, res)
);
routes.put("/albums/:id", (req, res) =>
    updateAlbumController.update(req, res)
);
routes.delete("/albums/:id", (req, res) =>
    deleteAlbumController.delete(req, res)
);

export default routes;
