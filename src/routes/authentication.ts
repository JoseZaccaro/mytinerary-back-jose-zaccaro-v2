import { AUTH_POST } from "@/controllers/authentication/post";
import { userExists } from "@/middlewares/authentication/userExists";
import { verifyPassword } from "@/middlewares/authentication/verifyPassword";
import { signInSchema } from "@/middlewares/validation/schemas/signIn";
import { signUpSchema } from "@/middlewares/validation/schemas/signUp";
import { validateSchema } from "@/middlewares/validation/validateSchema";
import express from "express";

const authenticationRouter = express.Router();

authenticationRouter.post('/signup', validateSchema(signUpSchema), AUTH_POST.signUp)
authenticationRouter.post('/signin', validateSchema(signInSchema), userExists, verifyPassword, AUTH_POST.signIn)

export default authenticationRouter
