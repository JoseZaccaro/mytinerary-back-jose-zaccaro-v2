import { userDTO } from "@/domain/DTO/userDTO";
import { UserInterface } from "@/domain/User";
import { UserRepositoryInterface } from "@/ports/user/repository";
import User from "./model";
import { GenericRepository } from "../genericRepository";



class UserRepositoryImpl implements UserRepositoryInterface {
    static #instance: UserRepositoryImpl;
    static #repository: GenericRepository<UserInterface>;
    private constructor() { }

    public static get instance(): UserRepositoryImpl {
        if (!UserRepositoryImpl.#instance) {
            UserRepositoryImpl.#instance = new UserRepositoryImpl();
            UserRepositoryImpl.#repository = new GenericRepository(User, userDTO);
        }

        return UserRepositoryImpl.#instance;
    }

    private static get repository() {
        return undefined;
    }

    async save(user: UserInterface) {
        return await UserRepositoryImpl.#repository.save(user)
    }

    async findById(id: string) {
        return await UserRepositoryImpl.#repository.findById(id)
    }

    async findAll() {
        return await UserRepositoryImpl.#repository.findAll()
    }
    async deleteById(id: string) {
        await UserRepositoryImpl.#repository.deleteById(id)
    }
    async findByIdAndUpdate(id: string, user: UserInterface) {
        return await UserRepositoryImpl.#repository.findByIdAndUpdate(id, user)
    }
    
    async findByEmail(email: string) {
        try {
            const user = await User.findOne({ email: email })
            if (!user) {
                return null
            }
            return user
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }


}

export { UserRepositoryImpl as UserRepository }
