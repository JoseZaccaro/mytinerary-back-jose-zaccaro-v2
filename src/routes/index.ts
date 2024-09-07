import express from "express";
import cities from "./city";
import users from "./user";

const mainRouter = express.Router();

mainRouter.use('/cities', cities)
mainRouter.use('/users', users)

export default mainRouter;