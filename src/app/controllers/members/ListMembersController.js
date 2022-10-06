import ListMembersService from "../../services/members/ListMembersService";

export default class ListMembersController {
    constructor() { this.service = new ListMembersService(); }

    async listByBand(req, res) {
        const { name } = req.query;

        const resulte = await this.service.listMemberByName(name);

        return res.json(resulte)
    }

    async listAll(req, res) {
        const resulte = await this.service.listAll();

        return res.json(resulte)
    }
}
