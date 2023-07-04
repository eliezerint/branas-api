import axios from "axios";

export default class Users {
    constructor(readonly email: string, readonly password: string) {}

    getEmail(): string {
        return this.email;
    }

    static async all(): Promise<IUser[]> {
        const response = await axios
            .get("/users.json")
            .then((resp) => resp.data);
        return response;
    }
}
