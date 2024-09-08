import { USER_DELETE } from "@/controllers/user/delete";
import { USER_GET } from "@/controllers/user/get";
import { USER_PATCH } from "@/controllers/user/patch";
import { USER_POST } from "@/controllers/user/post";
import express from "express";

const usersRouter = express.Router();

usersRouter.route('/')
    .get(USER_GET.getAllUsers)
    .post(USER_POST.createUser)

usersRouter.route('/:id')
    .get(USER_GET.getOneUserById)
    .delete(USER_DELETE.deleteUser)
    .patch(USER_PATCH.updateUser)
    
export default usersRouter