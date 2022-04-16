import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModels";

class UserController {
  async findAll(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}
  async create(req: Request, res: Response) {
    const { email, nome, idade } = req.body;
    const user = await UserModel.create({
      email,
      nome,
      idade,
    });

    return res.status(201).json(user);
  }
  async update(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}
