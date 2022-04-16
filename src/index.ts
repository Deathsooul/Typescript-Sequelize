import express from "express";
import { router } from "./routes";
import { db } from "./database/db";
require("dotenv").config();

const port = 3333;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, async () => {
  await db.sync();
  console.info("DB Synced");
  console.info(`Server listen on port ${port}`);
});
