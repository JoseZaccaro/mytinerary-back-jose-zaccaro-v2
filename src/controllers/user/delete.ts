import { UserService } from "@/adapters/user/service";

async function deleteUser(req: any, res: any) {
    try {
        await UserService.instance.deleteOneById(req.params.id)
        res.status(200).json({ message: "User deleted", status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const USER_DELETE = {
    deleteUser,

} as const

export { USER_DELETE } 