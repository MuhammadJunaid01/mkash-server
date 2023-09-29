import express from "express";
import {
  createUser,
  getAdmins,
  getNormalUsers,
  getUserById,
  getUsers,
} from "./user.controller";
import { getNormalUsersFromDb } from "./user.service";
const router = express.Router();
router.post("/create-user", createUser);
router.get("/", getUsers);
router.get("/admins", getAdmins);
router.get("/normal-users", getNormalUsers);

router.get("/:id", getUserById);

export default router;
