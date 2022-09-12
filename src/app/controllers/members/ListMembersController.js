import ListMembersService from "../../services/members/ListMembersService";

export default class ListMembersController {
    constructor() { this.service = new ListMembersService(); }

    async listAll(req, res) {
        const { name } = req.query;

        const resulte = await this.service.listMemberByName(name);

        return res.send(resulte)
    }
}
