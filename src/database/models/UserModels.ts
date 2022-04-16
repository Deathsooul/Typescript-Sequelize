import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
});
