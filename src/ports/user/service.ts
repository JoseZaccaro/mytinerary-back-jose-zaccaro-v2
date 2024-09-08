import { UserInterface } from "@/domain/User";
import { Service } from "../service";


export interface UserServiceInterface extends Service<UserInterface> {
    existsByEmail(email: string): Promise<boolean>
    findByEmail(email: string): Promise<UserInterface | null>
    encryptPassword(password: string): string
    generateToken(id: string, email: string): string
}
