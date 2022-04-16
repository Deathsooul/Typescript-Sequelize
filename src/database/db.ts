import { Sequelize } from "sequelize";
require("dotenv").config();

export const db = new Sequelize("mydb", "myuser", "mypassword", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
});
