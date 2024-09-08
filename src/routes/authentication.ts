import { AUTH_POST } from "@/controllers/authentication/post";
import { signUpSchema } from "@/middlewares/validation/schemas/signUp";
import { validateSchema } from "@/middlewares/validation/validateSchema";
import express from "express";

const authenticationRouter = express.Router();

authenticationRouter.post('/signup', validateSchema(signUpSchema), AUTH_POST.signUp)

export default authenticationRouter
