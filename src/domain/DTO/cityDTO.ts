import { CityInterface } from '@/domain/City';

function cityDTO(city: CityInterface) {
    return {
        _id: city.id,
        city: city.city,
        country: city.country,
        continent: city.continent,
        description: city.description,
        image: city.image
    }
}

export { cityDTO }