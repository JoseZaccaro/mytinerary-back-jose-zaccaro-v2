interface UserInterface {
    id: unknown;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: string;
    country: string;
    googleFlag: boolean;
    likedItinerariesId: unknown[];    
}

export { UserInterface }