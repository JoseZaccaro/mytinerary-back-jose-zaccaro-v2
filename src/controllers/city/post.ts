import { CityService } from "@/adapters/city/service"
import { CityInterface } from "@/domain/City"


async function createCity(req: any, res: any) {
    try {
        const { city, country, image, description, continent } = req.body
        const newCity: CityInterface = { city, country, image, description, continent, id: undefined }

        const cityCreated = await CityService.instance.create(newCity)
        res.status(201).json({ message: "City created", city: cityCreated, status: 201 })
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "Something went wrong." })
    }
}

const CITY_POST = {
    createCity,

} as const

export { CITY_POST } 