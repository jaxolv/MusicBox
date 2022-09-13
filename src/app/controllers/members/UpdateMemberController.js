import UpdateMemberService from "../../services/members/UpdateMemberService";

export default class UpdateMemberController {
    constructor() { this.service = new UpdateMemberService() }

    async update(req, res) {
        const { id } = req.params
        const {
            stillMember,
            band_id,
            artist_id
        } = req.body

        const resulte = await this.service.updateMember(
            id,
            stillMember,
            band_id,
            artist_id
        )

        return res.json(resulte)
    }
}