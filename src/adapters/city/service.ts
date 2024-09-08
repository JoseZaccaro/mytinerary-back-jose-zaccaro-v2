import { CityInterface } from '@/domain/City';
import { CityServiceInterface } from '@/ports/city/service';
import { CityRepository } from './repository';

class CityServiceImpl implements CityServiceInterface {
    static #instance: CityServiceImpl;

    private constructor() { }

    public static get instance(): CityServiceImpl {
        if (!CityServiceImpl.#instance) {
            CityServiceImpl.#instance = new CityServiceImpl();
        }

        return CityServiceImpl.#instance;
    }


    async create(city: CityInterface) {
        try {
            let cityCreated = await CityRepository.instance.save(city)
            return cityCreated
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city service.");
        }
    }


    async getOneById(id: string) {

        try {
            let cityFounded = await CityRepository.instance.findById(id)
            return cityFounded
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city service.");
        }

    }


    async getAll() {

        try {
            let citiesFounded = await CityRepository.instance.findAll()
            return citiesFounded
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city service.");
        }

    }


    async deleteOneById(id: string) {

        try {
            await CityRepository.instance.deleteById(id)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city service.");
        }
    }


    async updateOneById(id: string, city: CityInterface) {
        try {
            let cityUpdated = await CityRepository.instance.findByIdAndUpdate(id, city)
            return cityUpdated
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in city service.");
        }
    }


}


export { CityServiceImpl as CityService }