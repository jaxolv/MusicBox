import UpdatePasswordService from "../../services/user/UpdatePasswordService";

export default class UpdatePasswordController {
    constructor() { this.service = new UpdatePasswordService() }

    async update(req, res) {
        const { id } = req.params
        const { password, new_password } = req.body

        const resulte = await this.service.updatePassword(
            id,
            password,
            new_password
        )

        return res.json(resulte)
    }
}
