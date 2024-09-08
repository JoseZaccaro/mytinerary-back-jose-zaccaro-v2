import { UserService } from "@/adapters/user/service";
import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";

passport.use(
    new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET || "secret"
    }, async (payload, done) => {
        try {
            const user = await UserService.instance.getOneById(payload.id)            
            if (!user) return done(null, false)
            return done(null, user)
        } catch (error) {
            return done(error, false)
        }
    })
)

export { passport as passportMiddleware }