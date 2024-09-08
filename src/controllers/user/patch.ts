import { UserService } from "@/adapters/user/service";
import { UserInterface } from "@/domain/User";

async function updateUser(req: any, res: any) {
    try {
        const { firstName, lastName, email, password, image, country, googleFlag, likedItinerariesId } = req.body
        const updatesUser: UserInterface = { firstName, lastName, email, password, image, country, googleFlag, likedItinerariesId, id: req.params.id }

        const userUpdated = await UserService.instance.updateOneById(updatesUser.id as string, updatesUser)

        res.status(200).json({ message: "User updated", user: userUpdated, status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const USER_PATCH = {
    updateUser,

} as const

export { USER_PATCH } 