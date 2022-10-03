import DeleteUserService from "../../services/user/DeleteUserService";

export default class DeleteUserController {
    constructor() { this.service = new DeleteUserService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseUser(id);

        return res.json(resulte)
    }
}
