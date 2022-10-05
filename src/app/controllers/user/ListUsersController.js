import ListUsersService from "../../services/user/ListUsersService";

export default class ListUsersController {
    constructor() { this.service = new ListUsersService(); }

    async listAll(req, res) {
        const list = await this.service.listAll();

        if (list.length === 0) { return res.status(204).json(list)}

        return res.json(list)
    }
}
