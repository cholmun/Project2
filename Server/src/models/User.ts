// import { DataTypes, Model } from "sequelize";
// import sequelize from "../config/connection";

// class User extends Model {
//     public id!: number;
//     public username!: string;
//     public password!: string;
// }

// // USERNAME UNIQUE OR NO?
// User.init(
//     {
//         id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//         username: { type: DataTypes.STRING, allowNull: false, unique: true },
//         password: { type: DataTypes.STRING, allowNull: false },
//     },
//     {
//         sequelize,
//         modelName: 'User',
//         tableName: 'users',
//         timestamps: false,

//     }
// );

// export default User;

import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { Roles } from "../constants";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  roles: string[];
  comparePassword: (enteredPassword: string) => boolean;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
    default: [Roles.User],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
