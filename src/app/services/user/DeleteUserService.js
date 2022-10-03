import UsersModel from "../../models/user/UsersModel";

export default class DeleteArtistService {
    constructor() {}

    async eraseUser(id) {
        try {
            const user = await UsersModel.findByPk(id);

            if (!user) {
                return { message: "User not found." };
            }

            const erasedUser = await user.destroy();

            return erasedUser
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
