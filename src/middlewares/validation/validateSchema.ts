import { NextFunction, Request, Response } from "express"
import Joi from "joi"

const validateSchema = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        const errors = error.details.map((detail: any) => detail.message)
        return res.status(400).json({ errors, status: 400 })
    }

    next()
}

export { validateSchema }