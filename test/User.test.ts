import Users from "../src/Users";
import axios from "axios";

jest.mock("axios");

test("deve buscar os usuários", async () => {
    const users = [{ email: "Bob@.com.br" }];
    const resp = { data: users };
    (axios.get as jest.Mock).mockResolvedValue(resp);

    return expect(
        await Users.all().then((data: IUser[]) => expect(data).toEqual(users))
    );
});
