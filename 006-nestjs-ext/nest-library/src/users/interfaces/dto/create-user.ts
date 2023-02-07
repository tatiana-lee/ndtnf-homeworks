import { IUser } from '../user.interface';

export interface CreateUserDto {
  email: IUser['email'];
  password: IUser['password'];
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
}
