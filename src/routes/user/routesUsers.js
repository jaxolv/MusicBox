import Router from "express";
import multer from "multer";

// upload files:
import UploadFileController from "../../app/upload/UploadFileController"
import multerConfig from "../../config/multer"

const uploadFile = multer({ storage: multerConfig })

// validator:
import artistsValidator from "../../middlewares/artist/ArtistsValidator";
import primaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";
import validateSessionToken from "../../middlewares/session/ValidateSessionToken"

// controllers:
import SessionController from "../../app/controllers/auth/SessionController";
import CreateUserController from "../../app/controllers/user/CreateUserController";
import DeleteUserController from "../../app/controllers/user/DeleteUserController";
import ListUsersController from "../../app/controllers/user/ListUsersController";
import UpdateUserController from "../../app/controllers/user/UpdateUserController";
import UpdatePasswordController from "../../app/controllers/user/UpdatePasswordController"

const routes = new Router();

// instâncias:
const sessionController = new SessionController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();

// CRUD:
routes.post("/session", (req, res) =>
    sessionController.session(req, res)
)
routes.post("/users", (req, res) =>
    createUserController.create(req, res)
);
routes.get("/users", (req, res) =>
    listUsersController.listAll(req, res)
);

// routes.use(validateSessionToken)

routes.delete("/users/:id", (req, res) =>
    deleteUserController.delete(req, res)
);
routes.put("/users/:id", validateSessionToken, (req, res) =>
    updateUserController.update(req, res)
);
routes.patch("/users/:id", validateSessionToken, (req, res) =>
    updatePasswordController.update(req, res)
)

export default routes;
