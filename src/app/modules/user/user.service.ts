import { IUser } from "./user.interface";
import { User } from "./user.model";
interface IReturnData extends IUser {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
interface IReturnError {
  message: string;
}
export const saveNewUser = async (
  user: IUser
): Promise<IReturnData | IReturnError> => {
  try {
    const newUser = new User(user);
    // const fullName: string = newUser.fullName();
    // console.log("fullName", fullName);
    const dbUser = await newUser.save();
    if (dbUser) {
      return dbUser as unknown as IReturnData;
    } else {
      throw new Error("something wrong");
    }
  } catch (error: any) {
    return { message: error.message } as IReturnError;
  }
};
export const getUsersFormDb = async (): Promise<
  IReturnData[] | IReturnError
> => {
  try {
    const users = await User.find({});
    if (!users) {
      throw new Error("something wrong please try agin");
    }
    return users as unknown as IReturnData[];
  } catch (error: any) {
    return { message: error.message } as IReturnError;
  }
};
export const findUserById = async (
  id: string
): Promise<IReturnData | IReturnError> => {
  try {
    const user = await User.findById(id, {
      name: 1,
      email: 1,
    });
    if (!user) {
      throw new Error("user does not exist in db!");
    }
    return user as unknown as IReturnData;
  } catch (error) {
    return { message: error.message } as IReturnError;
  }
};
export const getAdminUsersFromDb = async (): Promise<IUser[]> => {
  const admins = await User.getAdminUsers();

  return admins as unknown as IUser[];
};
export const getNormalUsersFromDb = async (): Promise<IUser[]> => {
  const normalUsers = await User.getNormalUsers();
  return normalUsers as unknown as IUser[];
};
