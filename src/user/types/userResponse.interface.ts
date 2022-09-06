import {UserType} from "@app/user/types/user.type";

export class UserResponseInterface {
    user: UserType & {token: string};
}
