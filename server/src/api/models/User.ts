// src/models/User.ts

import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: "Admin" | "User" | "Author";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("Admin", "User","Author"),
      allowNull: false,
      defaultValue: "User",
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

export default User;
