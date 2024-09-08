
import { CityRepositoryInterface } from '@/ports/city/repository';
import { CityInterface } from '@/domain/City';
import City from './model';
import { cityDTO } from '@/domain/DTO/cityDTO';
import { GenericRepository } from '../genericRepository';

class CityRepositoryImpl implements CityRepositoryInterface {
    static #instance: CityRepositoryImpl;
    static #repository: GenericRepository<CityInterface>;

    private constructor() { }

    public static get instance(): CityRepositoryImpl {
        if (!CityRepositoryImpl.#instance) {
            CityRepositoryImpl.#instance = new CityRepositoryImpl();
            CityRepositoryImpl.#repository = new GenericRepository(City, cityDTO);
        }

        return CityRepositoryImpl.#instance;
    }

    async save(city: CityInterface) {
        return await CityRepositoryImpl.#repository.save(city)
    }
    async findById(id: string) {
        return await CityRepositoryImpl.#repository.findById(id)
    }
    async findAll() {
        return await CityRepositoryImpl.#repository.findAll()
    }
    async deleteById(id: string) {
        await CityRepositoryImpl.#repository.deleteById(id)
    }
    async findByIdAndUpdate(id: string, city: CityInterface) {
        return await CityRepositoryImpl.#repository.findByIdAndUpdate(id, city)

    }
}

export { CityRepositoryImpl as CityRepository }