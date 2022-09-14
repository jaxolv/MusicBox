import * as yup from "yup";

async function PrimaryKeyValidator(req, res, next) {
    const schema = yup.object().shape({
        id: yup
            .string()
            .length(36)
            .strict()
            .required()
            .typeError("Apenas texto.")
        })

    await schema.validate(req.params).catch(error => {
        return res.status(400).json({
            message: error.errors
        })
    })

    next();
}

export default PrimaryKeyValidator;