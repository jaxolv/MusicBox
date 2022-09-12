import * as yup from "yup";

async function BandsValidator(req, res, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .max(50, "No máximo, 50 caracteres.")
            .strict()
            .required()
            .typeError("Apenas texto."),
        foundation: yup
            .number()
            .strict()
            .required()
            .typeError("Digite apenas números."),
        end: yup
            .number()
            .strict()
            .typeError("Digite apenas números.")
    })

    await schema.validate(req.body).catch(error => {
        return res.status(400).json({
            message: error.errors
        })
    })

    next()
}

export default BandsValidator;