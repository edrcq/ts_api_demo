import { NextFunction, Request, Response } from "express";

export interface IController {}

export enum CrudControllerAction {
    GET_ONE = "getOne",
    GET_ALL = "getAll",
    CREATE = "create",
    UPDATE = "update",
    REMOVE = "remove",
    REPLACE = "replace"
}

export abstract class CrudController {
    [CrudControllerAction.GET_ONE](req: Request, res: Response) {}
    [CrudControllerAction.GET_ALL](req: Request, res: Response) {}
    [CrudControllerAction.CREATE](req: Request, res: Response, next: NextFunction) {}
    [CrudControllerAction.UPDATE](req: Request, res: Response) {}
    [CrudControllerAction.REMOVE](req: Request, res: Response) {}
    [CrudControllerAction.REPLACE](req: Request, res: Response) {}
}
