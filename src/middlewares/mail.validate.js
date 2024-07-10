import mail from "../schemas/mail.zod.js"

const mailValidate = (req, res, next) => {
    const validate = mail.safeParse(req.body);
    if (validate.success) {
        next();
    } else {
        res.status(400).json({
            message: validate.error
        })
    }
}

export default mailValidate;