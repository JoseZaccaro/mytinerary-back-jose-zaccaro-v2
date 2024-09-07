import { CityService } from "@/adapters/city/service"
import { CityInterface } from "@/domain/City"


async function updateCity(req: any, res: any) {
    try {
        const { city, country, image, description, continent } = req.body
        const updatesCity: CityInterface = { city, country, image, description, continent, id: req.params.id }

        const cityUpdated = await CityService.instance.updateOneById(updatesCity.id, updatesCity)

        res.status(200).json({ message: "City updated", city: cityUpdated, status: 200 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const CITY_PATCH = {
    updateCity,

} as const

export { CITY_PATCH } 