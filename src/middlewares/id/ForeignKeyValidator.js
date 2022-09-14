import * as yup from "yup";

async function ForeignKeyValidator(req, res, next) {
    const schema = yup.object().shape({
        band_id: yup
            .string()
            .length(36, "O ID de referência deve ter exatos 36 caracteres.")
            .strict()
            .typeError("Apenas letras minúsculas e números no formato string."),
        artist_id: yup
            .string()
            .length(36, "O ID de referência deve ter exatos 36 caracteres.")
            .strict()
            .typeError("Apenas letras minúsculas e números no formato string.")
        })

    await schema.validate(req.body).catch(error => {
        return res.status(400).json({
            message: error.errors
        })
    })

    next();
}

export default ForeignKeyValidator;