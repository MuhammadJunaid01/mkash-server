import { HydratedDocument, Model } from "mongoose";

export interface IUserMethod {
  fullName(): string;
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
// export interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }
// export interface UserModel extends Model<IUser, {}, IUserMethod> {
//   getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethod>>;
//   getNormalUsers(): Promise<HydratedDocument<IUser, IUserMethod>>;
// }
