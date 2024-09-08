import express from "express";
import cities from "./city";
import users from "./user";
import authentication from "./authentication";

const mainRouter = express.Router();

mainRouter.use('/cities', cities)
mainRouter.use('/users', users)
mainRouter.use('/auth', authentication)

export default mainRouter;