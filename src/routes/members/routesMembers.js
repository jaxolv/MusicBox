import Router from "express";

// validator:
import PrimaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";

// controllers:
import CreateMemberController from "../../app/controllers/members/CreateMemberController";
import ListMembersController from "../../app/controllers/members/ListMembersController"

const routes = new Router();

// instâncias:
const createMemberController = new CreateMemberController();
const listMembersController = new ListMembersController();

// CRUD:
routes.post("/members", (req, res) =>
    createMemberController.create(req, res)
);
routes.get("/members", (req, res) =>
    listMembersController.listAll(req, res)
);

export default routes;
