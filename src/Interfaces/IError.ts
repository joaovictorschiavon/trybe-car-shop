interface IError extends Error {
  statusCode: number;
  name: string;
}

export default IError;