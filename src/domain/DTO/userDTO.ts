import { UserInterface } from "../User"

function userDTO(user: UserInterface) {
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        image: user.image,
        country: user.country,
        googleFlag: user.googleFlag,
        likedItinerariesId: user.likedItinerariesId
    }
}

export { userDTO }