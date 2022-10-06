import UpdateUserService from "../../services/user/UpdateUserService";

export default class UpdateUserController {
    constructor() { this.service = new UpdateUserService() }

    async update(req, res) {
        const { id } = req.params
        const {
            name,
            username,
            email,
            born,
            country,
            zipCode,
            verifyed
        } = req.body

        const resulte = await this.service.updateUser(
            id,
            name,
            username,
            email,
            born,
            country,
            zipCode,
            verifyed
        )

        return res.json(resulte)
    }
}
