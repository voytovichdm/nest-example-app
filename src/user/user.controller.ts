import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from "@app/user/dto/createUser.dto";
import {UserEntity} from "@app/user/user.entity";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('users')
    async createUser(@Body('user') createUserDto: CreateUserDto ): Promise<UserEntity> {
        return this.userService.createUser(createUserDto);
    }
}
