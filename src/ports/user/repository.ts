import { UserInterface } from "@/domain/User";
import { Repository } from "../repository";

export interface UserRepositoryInterface extends Repository<UserInterface> {
}
