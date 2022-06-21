/**
 * IMPORTS
 */

import { HTTPError } from 'got';

import ServiceError from './ServiceError';

/**
 * CORE
 */

export function throwServiceError(
  SomeServiceError: new (statusCode: number, message: string) => ServiceError,
  httpError: HTTPError,
  log = true,
): never {
  const { response: { statusCode, body }, message } = httpError;
  log && body && console.error(body);
  throw new SomeServiceError(statusCode, message);
}

/**
 * If the provided error is an HTTPError, it will be transformed into
 * one {SomeServiceError}. Otherwise, it's just rethrown.
 * @param SomeServiceError Subclass of {ServiceError}
 * @param error Any error
 */
export function rethrowAsServiceError(
  SomeServiceError: new (statusCode: number, message: string) => ServiceError,
  error: any,
): never {
  if (error instanceof HTTPError) {
    throwServiceError(SomeServiceError, error);
  }
  throw error;
}

export function shouldBeNever(x: never): never;
export function shouldBeNever(x: any) {
  throw new Error(`Parameter should be of type never: ${x}`);
}
