import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(+id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatedUser: Partial<User>): Promise<User> {
        return this.userService.update(+id, updatedUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        this.userService.delete(+id);
    }
}
