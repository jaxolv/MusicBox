// import ListUsersService from "../../services/user/ListUsersService";
// import hashPassword from "../../utils/HashPassword";
import crypto from "node:crypto"
import UsersModel from "../../models/user/UsersModel";

export default class UpdatePasswordSongService {
    constructor() {}

    async updatePassword(id, password, newPassword) {
        try {
            // Verificando se o usuário existe no banco de dados pelo id:
            const user = await UsersModel.findByPk(id);

            if (!user) { return { message: "User not found." } };

            // Gerando a senha já criptografada e verificando se ela é a mesma do usuário:
            const hashedPass = crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT, 10000, 64, 'sha512').toString('hex')

            const isValidPassword = hashedPass === user.password

            if (!isValidPassword) { return { message: "Invalid Password" } }

            // Gerando uma nova senha criptografada e comparando com a antiga senha a ser substituída.
            const newPassHashed = crypto.pbkdf2Sync(newPassword, process.env.PASSWORD_SALT, 10000, 64, 'sha512').toString('hex');

            const isNewPassEqual = newPassHashed === hashedPass

            if (isNewPassEqual) {
                return { message: "You can't change your password for the same one you already using." }
            }

            // Aqui, enfim, é feita a substituição encontrando o ID do usuário e retornando a mensagem com a alteração da senha confirmada pelo username.
            const [numberRegisters] = await UsersModel.update({ password: newPassHashed }, { where: { id } });

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {
                    message: `The password of the user @${user.username} was successfully updated!`
                }
            }

        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}
