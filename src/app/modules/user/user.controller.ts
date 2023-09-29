import { NextFunction, Request, Response } from "express";
import { IUser } from "./user.interface";
import {
  findUserById,
  getAdminUsersFromDb,
  getNormalUsersFromDb,
  getUsersFormDb,
  saveNewUser,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser = req.body;

    const newUser = await saveNewUser(user);

    return res.status(200).json({ user: newUser });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsersFormDb();
    res.status(200).json({ users });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    res.status(200).json({ user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
export const getAdmins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const admins = await getAdminUsersFromDb();
    res.status(200).json({ admins });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
export const getNormalUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const normalUsers = await getNormalUsersFromDb();
    res.status(200).json({ normalUsers });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
