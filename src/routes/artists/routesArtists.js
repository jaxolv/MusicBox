import Router from "express";
import multer from "multer";

// upload files:
import multerConfig from "../../config/multer"
const uploadFile = multer({ storage: multerConfig })

// validator:

// controllers:

import UploadFileController from "../../app/upload/UploadFileController"

const routes = new Router();

// instâncias:

// CRUD:

export default routes;