export default class NotFoundError extends Error {
  readonly statusCode = 404;
  readonly name = 'NotFoundError';
  constructor(message: string) {
    super(message);
    this.message = message;
    // this.stack = '404';
  }
}