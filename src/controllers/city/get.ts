import { CityService } from "@/adapters/city/service";


async function getOneCityById(req: any, res: any) {
    try {
        const cityFounded = await CityService.instance.getOneById(req.params.id)
        res.status(200).json({ message: "City founded", city: cityFounded, status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

async function getAllCities(req: any, res: any) {
    try {
        const citiesFounded = await CityService.instance.getAll()
        res.status(200).json({ message: "Cities founded", cities: citiesFounded, status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const CITY_GET = {
    getOneCityById,
    getAllCities
} as const

export { CITY_GET };
