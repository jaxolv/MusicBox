import UsersModel from "../../models/user/UsersModel";

export default class ListUsersService {
    constructor() { }

    async listAll() {
        try {
            const list = await UsersModel.findAll()

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async listOne(email) {
        const user = await UsersModel.findOne({
            where: { email }
        })

        return user
    }

    async listOneById(id) {
        const user = await UsersModel.findByPk(id)

        return user
    }
}
