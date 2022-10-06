import jwt from "jsonwebtoken";
import ListUsersService from "../../app/services/user/ListUsersService";

export default async function validateSessionToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Needs login!" })
    }

    const getValidToken = String(token).split("Bearer ")[1];

    try {
        const validateToken = jwt.verify(getValidToken, process.env.JWT_PRIVATE_KEY);

        /* // Verificação "desnecessária" pois o verify valida o tempo de expiração do token também. Mantive o código para mostrar que o exp vem com o valor que precisa ser modificado na verificação
        if (new Date() > validateToken.exp * 1000) {
            return response.status(401).json({ error: "Expired token" });
        } */

        const listUsersService = new ListUsersService();
        const isValidUserId = await listUsersService.listOneById(validateToken.id);

        if (!isValidUserId) {
            return res.status(401).json({error: "User not found!"})
        }
    } catch (err) {
        return res.status(401).json({ error: err.message })
    }

    next()
}
