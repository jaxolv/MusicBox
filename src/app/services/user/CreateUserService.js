import { v4 } from "uuid";
import crypto from "node:crypto"
import UsersModel from "../../models/user/UsersModel";

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
        const hashedPassword = crypto
            .pbkdf2Sync(password, process.env.PASSWORD_SALT, 10000, 64, 'sha512')
            .toString('hex');

        try {
            const user = await UsersModel.create({
                id: v4(),
                name: name.toLowerCase(),
                username: username.toLowerCase(),
                password: hashedPassword,
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