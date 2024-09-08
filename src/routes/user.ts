import { USER_DELETE } from "@/controllers/user/delete";
import { USER_GET } from "@/controllers/user/get";
import { USER_PATCH } from "@/controllers/user/patch";
import { USER_POST } from "@/controllers/user/post";
import express from "express";

const usersRouter = express.Router();

usersRouter.get('/', USER_GET.getAllUsers)
usersRouter.get('/:id', USER_GET.getOneUserById)
usersRouter.post('/', USER_POST.createUser)
usersRouter.delete('/:id', USER_DELETE.deleteUser)
usersRouter.patch('/:id', USER_PATCH.updateUser)
export default usersRouter