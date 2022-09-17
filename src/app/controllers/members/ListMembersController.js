import ListMembersService from "../../services/members/ListMembersService";

export default class ListMembersController {
    constructor() { this.service = new ListMembersService(); }

    async listByBand(req, res) {
        const { name } = req.query;

        const resulte = await this.service.listMemberByName(name);

        if (resulte.message) { return res.status(400).json(resulte) }

        return res.json(resulte)
    }
}
