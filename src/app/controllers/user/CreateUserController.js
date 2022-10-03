import CreateUserService from "../../services/user/CreateUserService"

export default class CreateUserController {
    constructor() { this.service = new CreateUserService() };

    async create(req, res) {
        const {
            name,
            username,
            password,
            email,
            born,
            country,
            zipCode,
            verifyed
        } = req.body

        const user = await this.service.newUser(
            name,
            username,
            password,
            email,
            born,
            country,
            zipCode,
            verifyed
        )

        return res.status(201).json(user)
    }
}
