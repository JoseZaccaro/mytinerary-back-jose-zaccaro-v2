import { USER_POST } from "@/controllers/user/post";
import express from "express";

const usersRouter = express.Router();

usersRouter.get('/', () => { })
usersRouter.get('/:id', () => { })
usersRouter.get('/', () => { })
usersRouter.post('/', USER_POST.createUser)
usersRouter.delete('/:id', () => { })
usersRouter.patch('/:id', () => { })
export default usersRouter