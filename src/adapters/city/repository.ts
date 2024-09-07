
import { CityRepositoryInterface } from '@/ports/city/repository';
import { CityInterface } from '@/domain/City';
import City from './model';
import { cityDTO } from '@/domain/DTO/cityDTO';

class CityRepositoryImpl implements CityRepositoryInterface {
    static #instance: CityRepositoryImpl;

    private constructor() { }

    public static get instance(): CityRepositoryImpl {
        if (!CityRepositoryImpl.#instance) {
            CityRepositoryImpl.#instance = new CityRepositoryImpl();
        }

        return CityRepositoryImpl.#instance;
    }

    async save(city: CityInterface) {
        try {
            const newCity = await City.create(city)


            return cityDTO(newCity)

        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city repository.");
        }
    }
    async findById(id: string) {

        try {
            const city = await City.findById(id)

            if (!city) throw new Error("City not found")

            return cityDTO(city)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city repository.");
        }

    }
    async findAll() {

        try {
            const cities = await City.find()
            return cities.map(cityDTO)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city repository.");
        }
    }
    async deleteById(id: string) {

        try {

            let city = await City.findByIdAndDelete(id)

            if (!city) throw new Error("City not found")

        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city repository.");
        }

    }
    async findByIdAndUpdate(id: unknown, city: CityInterface) {


        try {
            let cityUpdated = await City.findByIdAndUpdate(id, city, { new: true })

            if (!cityUpdated) throw new Error("City not found")

            return cityDTO(cityUpdated)

        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city repository.");
        }
    }
}

export { CityRepositoryImpl as CityRepository }