export default class ApiError extends Error {
  status: number;
  errors: never[];

  constructor (status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest (message: string, errors = []) {
    return new ApiError(400, message, errors);
  }
};
