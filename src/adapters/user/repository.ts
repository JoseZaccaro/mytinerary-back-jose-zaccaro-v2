import { userDTO } from "@/domain/DTO/userDTO";
import { UserInterface } from "@/domain/User";
import { UserRepositoryInterface } from "@/ports/user/repository";
import User from "./model";



class UserRepositoryImpl implements UserRepositoryInterface {
    static #instance: UserRepositoryImpl;

    private constructor() { }

    public static get instance(): UserRepositoryImpl {
        if (!UserRepositoryImpl.#instance) {
            UserRepositoryImpl.#instance = new UserRepositoryImpl();
        }

        return UserRepositoryImpl.#instance;
    }


    async save(user: UserInterface) {
        try {
            const newUser = await User.create(user)

            return userDTO(newUser)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user repository");
        }
    }
    async findById(id: string) {
        try {
            const findedUser = await User.findById(id)

            if (!findedUser) throw new Error("User not found")

            return userDTO(findedUser)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user repository");
        }
    }
    async findAll() {
        try {
            const findedUsers = await User.find()

            return findedUsers.map(userDTO)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user repository");
        }
    }
    async deleteById(id: string) {
        try {
            const deletedUser = await User.findByIdAndDelete(id)
            if (!deletedUser) throw new Error("User not found")
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user repository");
        }

    }
    async findByIdAndUpdate(id: string, city: UserInterface) {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, city, { new: true })
            if (!updatedUser) throw new Error("User not found")
            return userDTO(updatedUser)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user repository");
        }
    }


}

export { UserRepositoryImpl as UserRepository }
