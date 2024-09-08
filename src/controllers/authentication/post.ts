import { UserService } from "@/adapters/user/service";
import { UserInterface } from "@/domain/User";



async function signUp(req: any, res: any) {
    try {

        const { firstName, lastName, email, password, image, country, googleFlag } = req.body

        let user = {
            id: undefined,
            firstName,
            lastName,
            email,
            password,
            image,
            country,
            googleFlag: googleFlag ?? false,
            likedItinerariesId: []
        } as UserInterface

        if (!image || image.trim() === "") user.image = firstName[0].toUpperCase() + lastName[0].toUpperCase();
        if (!country || country.trim() === "") user.country = "No Country";

        if (await UserService.instance.existsByEmail(email)) {
            return res.status(400).json({ error: "Email already in use." })
        }

        await UserService.instance.create(user)

        res.status(201).json({ message: "User signed up successfully.", status: 201 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const AUTH_POST = {
    signUp,

} as const

export { AUTH_POST } 