import { AUTH_GET } from "@/controllers/authentication/get";
import { AUTH_POST } from "@/controllers/authentication/post";
import { passportMiddleware } from "@/middlewares/authentication/passport";
import { userExists } from "@/middlewares/authentication/userExists";
import { verifyPassword } from "@/middlewares/authentication/verifyPassword";
import { signInSchema } from "@/middlewares/validation/schemas/signIn";
import { signUpSchema } from "@/middlewares/validation/schemas/signUp";
import { validateSchema } from "@/middlewares/validation/validateSchema";
import express from "express";

const authenticationRouter = express.Router();

authenticationRouter.post('/signup', validateSchema(signUpSchema), AUTH_POST.signUp)
authenticationRouter.post('/signin', validateSchema(signInSchema), userExists, verifyPassword, AUTH_POST.signIn)
authenticationRouter.get('/verify', passportMiddleware.authenticate('jwt', { session: false }), AUTH_GET.verifyToken)
export default authenticationRouter
