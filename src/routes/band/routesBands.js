import Router from "express";
import multer from "multer";

// upload files:
import UploadFileController from "../../app/upload/UploadFileController"
import multerConfig from "../../config/multer"

const uploadFile = multer({ storage: multerConfig })

// validator:
import PrimaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";
import BandsValidator from "../../middlewares/band/BandsValidator"

// controllers:
import CreateBandController from "../../app/controllers/band/CreateBandController";
import ListBandsController from "../../app/controllers/band/ListBandsController";
import UpdateBandController from "../../app/controllers/band/UpdateBandController";
import DeleteBandController from "../../app/controllers/band/DeleteBandController";

const routes = new Router();

// instâncias:
const createBandController = new CreateBandController();
const listBandsController = new ListBandsController();
const updateBandController = new UpdateBandController();
const deleteBandBandController = new DeleteBandController();

// CRUD:
routes.post("/bands",
    BandsValidator, (req, res) =>
    createBandController.create(req, res)
);
routes.get("/bands", (req, res) =>
    listBandsController.listAll(req, res)
);
routes.put("/bands/:id",
    PrimaryKeyValidator, BandsValidator, (req, res) =>
    updateBandController.update(req, res)
);
routes.delete("/bands/:id",
    PrimaryKeyValidator, (req, res) =>
    deleteBandBandController.delete(req, res)
);

routes.post("/uploads", uploadFile.single("file"), (req, res) =>
    UploadFileController.storeFile(req, res)
);

export default routes;
