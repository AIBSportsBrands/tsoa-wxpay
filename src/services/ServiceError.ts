/**
* CORE
*/

abstract class ServiceError extends Error {
  readonly statusCode: number;

  constructor(name: string, statusCode: number, message: string) {
    super(`${name}: ${statusCode} - ${message}`);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export default ServiceError;
