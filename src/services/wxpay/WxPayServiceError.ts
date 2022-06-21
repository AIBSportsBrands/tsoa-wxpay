import ServiceError from '../ServiceError';

export class WxPayServiceError extends ServiceError {
  constructor(statusCode: number, message: string) {
    super('WxPayServiceError', statusCode, message);
  }
}
