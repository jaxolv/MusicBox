import * as yup from "yup";

async function ArtistsValidator(req, res, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .max(30, "No máximo, 30 caracteres.")
            .strict()
            .required()
            .typeError("Apenas texto."),
        born: yup
            .string()
            .strict()
            .required()
            .typeError("Apenas texto."),
        death: yup
            .string()
            .strict()
            .typeError("Apenas texto."),
        instrument: yup
            .string()
            .strict()
            .required()
            .typeError("Apenas texto."),
        secondInstrument: yup
            .string()
            .strict()
            .typeError("Apenas texto."),
        otherInstrument: yup
            .string()
            .strict()
            .typeError("Apenas texto."),
        songwriter: yup
            .boolean()
            .strict()
            .required()
            .typeError("Responda apenas com \"true\" ou \"false\"."),
        producer: yup
            .boolean()
            .strict()
            .required()
            .typeError("Responda apenas com \"true\" ou \"false\"."),
    })

    await schema.validate(req.body).catch(error => {
        return res.status(400).json({
            message: error.errors
        })
    })

    next()
}

export default ArtistsValidator;