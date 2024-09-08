import { UserInterface } from "@/domain/User";
import { Service } from "../service";


export interface UserServiceInterface extends Service<UserInterface> {
    existsByEmail(email: string): Promise<boolean>
}
