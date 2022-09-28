import { Request, Response } from "express";

export interface IController {}

export abstract class CrudController {
    getOne(req: Request, res: Response) {}
    getAll(req: Request, res: Response) {}
    create(req: Request, res: Response) {}
    update(req: Request, res: Response) {}
    remove(req: Request, res: Response) {}
    replace(req: Request, res: Response) {}
}
