export default class User {
    constructor(readonly email: string, readonly password: string) {}

    getEmail(): string {
        return this.email;
    }
}
