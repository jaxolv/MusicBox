import Router from "express";

// validator:
import PrimaryKeyValidator from "../../middlewares/id/PrimaryKeyValidator";
import ForeignKeyValidator from "../../middlewares/id/ForeignKeyValidator";

// controllers:
import CreateMemberController from "../../app/controllers/members/CreateMemberController";
import ListMembersController from "../../app/controllers/members/ListMembersController";
import DeleteMemberController from "../../app/controllers/members/DeleteMemberController";
import UpdateMemberController from "../../app/controllers/members/UpdateMemberController";

const routes = new Router();

// instâncias:
const createMemberController = new CreateMemberController();
const listMembersController = new ListMembersController();
const deleteMemberController = new DeleteMemberController();
const updateMemberController = new UpdateMemberController();

// CRUD:
routes.post("/members",
    ForeignKeyValidator, (req, res) =>
    createMemberController.create(req, res)
);
routes.get("/members", (req, res) =>
    listMembersController.listByBand(req, res)
);
routes.delete("/members/:id",
    PrimaryKeyValidator, (req, res) =>
    deleteMemberController.delete(req, res)
);
routes.put("/members/:id",
    PrimaryKeyValidator, ForeignKeyValidator, (req, res) =>
    updateMemberController.update(req, res)
);

export default routes;
