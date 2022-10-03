import { json } from "sequelize";
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

    async listOne(email, password) {
        const user = await UsersModel.listOne({
            where: { email }
        })

        return user
    }
}
