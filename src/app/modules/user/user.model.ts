import mongoose, { Model, Schema } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

interface IUserDocument extends IUser {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserModel extends Model<IUserDocument> {
  getAdminUsers(): Promise<IUserDocument[]>;
  getNormalUsers(): Promise<IUserDocument[]>;
}

const userSchema = new Schema<IUserDocument, IUserModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Add email format validation if necessary
    },
    password: {
      type: String,
      required: true,
      // Add password strength validation if necessary
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.getAdminUsers = async function () {
  const admins = await this.find({ role: "admin" });
  return admins;
};

userSchema.statics.getNormalUsers = async function () {
  const normalUsers = await this.find({ role: "user" });
  return normalUsers;
};

export const User = mongoose.model<IUserDocument, IUserModel>(
  "User",
  userSchema
);
