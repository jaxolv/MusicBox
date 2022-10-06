// import crypto from "node:crypto";
// import bcrypt from "bcrypt";

/* ***************************** DISCLAIMER *****************************

                NÃO FUNCIONOU usando CLASS ou FUNCTION.
Quando eu usava a propriedade CLASS para importar HashPassword, a mesma não era reconhecida e não exibia os métodos nela aplicados. Como FUNCTION, também não gerava novas criptografias, gerando sempre a mesma e nao passando nos testes de validação presentes em "./src/app/services/user/UpdateSessionController.js", portanto não pude fazer um dos principais requisitos da estruturação de códigos. Mas fica aqui a ressalva.
*/

/* export default class hashPassword {
    constructor() {}

    async hash(password, salt) {
        const hash = crypto
            .pbkdf2Sync(
                password,
                salt,
                10000,
                64,
                'sha512')
            .toString('hex');

        return hash
    }
} */

/* export default function hashPassword(password) {
    const salt = await bcrypt.genSalt(12)
    const pass = await bcrypt.hash(password, salt)

    return pass
}
 */
