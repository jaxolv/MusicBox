import * as yup from "yup";

async function ArtistsValidator(req, res, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .strict()
            .max(30, "No máximo, 30 caracteres.")
            .required("O campo 'nome' é obrigatório.")
            .typeError("name"),
        born: yup
            .string()
            .strict()
            .required()
            .typeError("born"),
        death: yup
            .string()
            .strict()
            .nullable()
            .typeError("death"),
        instrument: yup
            .string()
            .strict()
            .required()
            .typeError("instrument"),
        secondInstrument: yup
            .string()
            .strict()
            .nullable()
            .typeError("secondInstrument"),
        otherInstrument: yup
            .string()
            .strict()
            .nullable()
            .typeError("otherInstrument"),
        songwriter: yup
            .boolean()
            .strict()
            .required()
            .typeError("songwriter"),
        producer: yup
            .boolean()
            .strict()
            .required()
            .typeError("producer"),
    })

    await schema.validate(req.body).catch(error => {
        return res.status(400).json({
            erro: error.errors
        })
    })

    next()
}

export default ArtistsValidator;