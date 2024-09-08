import Joi from "joi";

const signUpSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    image: Joi.string(),
    country: Joi.string(),
    googleFlag: Joi.boolean(),
    likedItinerariesId: Joi.array()
});

export { signUpSchema }