import CreateMemberService from "../../services/members/CreateMemberService";

export default class CreateMemberController {
    constructor() {
        this.service = new CreateMemberService();
    }

    async create(req, res) {
        const { stillMember, band_id, artist_id } = req.body

        const member = await this.service.registerMember(
            stillMember,
            band_id,
            artist_id
        )

        return res.json(member)
    }
}