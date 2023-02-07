import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CreateUserDto } from './interfaces/dto/create-user';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public createUser(data: CreateUserDto): Promise<UserDocument> {
    const user = new this.UserModel(data);
    return user.save();
  }

  async findOne(id: string): Promise<UserDocument> {
    return this.UserModel.findById(id).exec();
  }
}
