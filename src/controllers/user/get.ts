import { UserService } from "@/adapters/user/service";


async function getOneUserById(req: any, res: any) {
    try {
        const userFounded = await UserService.instance.getOneById(req.params.id)
        res.status(200).json({ message: "User founded", user: userFounded, status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

async function getAllUsers(req: any, res: any) {
    try {
        const usersFounded = await UserService.instance.getAll()
        res.status(200).json({ message: "Users founded", users: usersFounded, status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const USER_GET = {
    getOneUserById,
    getAllUsers
} as const

export { USER_GET } 