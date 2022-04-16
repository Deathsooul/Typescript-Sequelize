import express from "express";

const router = express.Router();

router.post("/users", async () => {});
router.get("/users", async () => {});
router.get("/users/:userID", async () => {});
router.put("/users/:userID", async () => {});
router.delete("/users", async () => {});

export { router };
