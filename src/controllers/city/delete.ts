import { CityService } from "@/adapters/city/service"
import { CityInterface } from "@/domain/City"


async function deleteCity(req: any, res: any) {
    try {
        await CityService.instance.deleteOneById(req.params.id)
        res.status(200).json({ message: "City deleted", status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const CITY_DELETE = {
    deleteCity,

} as const

export { CITY_DELETE } 