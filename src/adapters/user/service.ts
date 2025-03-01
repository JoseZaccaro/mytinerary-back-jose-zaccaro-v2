import { UserInterface } from "@/domain/User";
import { UserServiceInterface } from "@/ports/user/service";
import { UserRepository } from "./repository";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
class UserServiceImpl implements UserServiceInterface {
    static #instance: UserServiceImpl;

    private constructor() { }

    public static get instance(): UserServiceImpl {
        if (!UserServiceImpl.#instance) {
            UserServiceImpl.#instance = new UserServiceImpl();
        }

        return UserServiceImpl.#instance;
    }

    async create(user: UserInterface) {
        try {
            let userCreated = await UserRepository.instance.save(user)
            return userCreated
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }
    async getOneById(id: string) {
        try {
            let userFounded = await UserRepository.instance.findById(id)
            return userFounded
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }
    async getAll() {
        try {
            let usersFounded = await UserRepository.instance.findAll()
            return usersFounded
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }
    async deleteOneById(id: string) {
        try {
            await UserRepository.instance.deleteById(id)
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }
    async updateOneById(id: string, user: UserInterface) {
        try {
            let userUpdated = await UserRepository.instance.findByIdAndUpdate(id, user)
            return userUpdated
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }

    async findByEmail(email: string) {
        try {
            let userFounded = await UserRepository.instance.findByEmail(email)
            if (!userFounded) {
                return null
            }
            return userFounded
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }

    async existsByEmail(email: string) {
        try {
            let userFounded = await UserRepository.instance.findByEmail(email)
            if (!userFounded) {
                return false
            }
            return true
        } catch (error) {
            console.log("Error: " + error);
            throw new Error("Error in user service.");
        }
    }

    encryptPassword(password: string): string {
        return bcrypt.hashSync(password)
    }

    generateToken(id: string, email: string): string {
        const token = jwt.sign({ id, email }, process.env.JWT_SECRET || "secret", { expiresIn: '1d' })
        return token
    }

}

export { UserServiceImpl as UserService }