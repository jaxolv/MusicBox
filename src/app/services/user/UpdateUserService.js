import UsersModel from "../../models/user/UsersModel";

export default class UpdateUserService {
    constructor() { }

    async updateUser(
        id,
        name,
        username,
        email,
        born,
        country,
        zipCode,
        verifyed
    ) {
        try {
            const user = await UsersModel.findByPk(id);

            if (!user) { return { message: "User not found." } };

            const [numberRegisters] = await UsersModel.update(
                {
                    name: name.toLowerCase(),
                    username: username,
                    email: email.toLowerCase(),
                    born,
                    country: country.toUpperCase(),
                    zipCode,
                    verifyed
                },
                {
                    where: { id }
                }
            );

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {
                    id,
                    name,
                    username,
                    email,
                    born,
                    country,
                    zipCode,
                    verifyed
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}
