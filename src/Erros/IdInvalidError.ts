import IError from '../Interfaces/IError';

export default class IdInvalidError extends Error implements IError {
  readonly statusCode:number = 422;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'IdInvalidError';
    // this.statusCode = 422;
  }
}