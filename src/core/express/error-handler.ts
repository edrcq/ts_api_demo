import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../../common/errors";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof BadRequestError) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    res.status(500).json({ debug_message: err.message })
}
