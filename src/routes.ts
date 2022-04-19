import express from "express";

import UserController from "./controller/UserController";

const router = express.Router();

router.get("/", async () => {});
router.post("/users", UserController.create);
router.get("/users", async () => {});
router.get("/users/:userID", async () => {});
router.put("/users/:userID", async () => {});
router.delete("/users", async () => {});

export { router };
