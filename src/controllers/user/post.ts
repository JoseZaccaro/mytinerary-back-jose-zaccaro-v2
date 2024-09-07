import { UserService } from "@/adapters/user/service"
import { UserInterface } from "@/domain/User"

async function createUser(req: any, res: any) {
    try {
        let {
            firstName, lastName, email,
            password, image, country,
            googleFlag = false, likedItinerariesId = undefined
        } = req.body
        
        if(!image || image.trim() === "") image = firstName[0].toUpperCase()
        if(!country || country.trim() === "") country = "No country"

        const newUser: UserInterface = {
            firstName, lastName, email,
            password, image, country,
            id: undefined, googleFlag, likedItinerariesId
        }
        const formatedUser = await UserService.instance.create(newUser)
        res
            .status(201)
            .json({
                message: "User created",
                user: formatedUser,
                status: 201
            })
    } catch (error) {
        console.log("Error: " + error)
        res.status(500).json({ error: "Something went wrong." })
    }
}

const USER_POST = {
    createUser,
} as const

export { USER_POST } 
