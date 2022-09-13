import DeleteMemberService from "../../services/members/DeleteMemberService";

export default class DeleteMemberController {
    constructor() { this.service = new DeleteMemberService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseMember(id);

        return res.json(resulte)
    }
}