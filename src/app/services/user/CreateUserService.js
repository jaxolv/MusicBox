import { v4 } from "uuid";
import UsersModel from "../../models/user/UsersModel";
// import HashPassword from "../../utils/HashPassword";
import crypto from "node:crypto"

export default class CreateArtistService {
    constructor() {}

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
            const emailExists = await UsersModel.findOne({
                where: { email }
            })

            if (emailExists) {
                return { message: "This e-mail it's already used."}
            }

            const usernameExists = await UsersModel.findOne({
                where: { username }
            })

            if (usernameExists) {
                return { message: "This username it's already used."}
            }

            const user = await UsersModel.create({
                id: v4(),
                name: name.toLowerCase(),
                username: username,
                password: crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT, 10000, 64, 'sha512').toString('hex'),
                email: email.toLowerCase(),
                born,
                country: country.toUpperCase(),
                zipCode,
                verifyed
            })

            console.log(user)
            return user
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}