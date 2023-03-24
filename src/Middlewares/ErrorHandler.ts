import { Request, Response, NextFunction } from 'express';

interface IError extends Error {
  statusCode: number;
  name: string;
}
export default class ErrorHandler {
  public static handle(
    err: IError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (err.name) {
      return res.status(err.statusCode).json({ message: err.message });
    }

    return res.status(500).json({ message: err.message });
  }
}