import { UserService } from "@/adapters/user/service";
import { NextFunction, Request, Response } from "express";

const userExists = async (req: Request, res: Response, next: NextFunction) => {

    const { email } = req.body

    const user = await UserService.instance.findByEmail(email)

    if(user) {
        req.body.exists = true
        req.body.encryptedPassword = user.password 
    }

    next()
    
}

export { userExists }