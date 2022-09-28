import { NextFunction, Request, Response } from 'express';
import { log } from '../../logger/simple-logger'

export function simpleLogger(req: Request, res: Response, next: NextFunction) {
    log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next()
}
