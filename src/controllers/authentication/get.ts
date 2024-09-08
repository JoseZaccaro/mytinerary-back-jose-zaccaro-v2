import { NextFunction, Request, Response } from "express";

function verifyToken(req: Request, res: Response, next: NextFunction) {
    res.json({
        message: "Token verified successfully.",
        status: 200,
        user: req.user
    })
}


const AUTH_GET = {
    verifyToken
}

export { AUTH_GET }
