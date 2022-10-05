import { v4 } from "uuid";
import UsersModel from "../../models/user/UsersModel";
import { hashPassword } from "../../utils/HashPassword";

export default class CreateArtistService {
    constructor() { }

    async newUser(
        name,
        username,
        password,
        email,
        born,
        country,
        zipCode,
        verifyed
    ) {
        try {
            const user = await UsersModel.create({
                id: v4(),
                name: name.toLowerCase(),
                username: username.toLowerCase(),
                password: hashPassword(password, process.env.PASSWORD_SALT),
                email: email.toLowerCase(),
                born,
                country: country.toUpperCase(),
                zipCode,
                verifyed
            })

            return user
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}