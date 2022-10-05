import jwt from "jsonwebtoken";
import ListUsersService from "../../services/user/ListUsersService";
import { hashPassword } from "../../utils/HashPassword";

export default class SessionController {
    constructor() { this.service = new ListUsersService() }

    async session(req, res) {
        const { email, password } = req.body;

        const user = await this.service.listOne(email)

        if (!user) {
            return res.status(204).json({
                error: "User not found!"
            })
        }

        const hashedPass = hashPassword(password, process.env.PASSWORD_SALT)

        const isValidPassword = hashedPass === user.password

        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid Password" })
        }

        const { id, name, username, country, born } = user

        return res.json({
            user: {
                id,
                name,
                username,
                country,
                born
            },
            token: jwt.sign({ id }, process.env.JWT_PRIVATE_KEY, {
                expiresIn: "7d"
            })
        })
    }
}
