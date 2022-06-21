/**
 * UTILS
 */

function valueOrExitIfUndefined<T>(
  name: string,
  defaultValue?: T,
): T | string {
  const value = process.env[name] ?? defaultValue;
  if (value === undefined) {
    console.error(`missing env. var. ${name}`);
    process.exit(1);
  }
  return value;
}

export function getEnvVar(name: string, defaultValue?: string): string {
  return valueOrExitIfUndefined(name, defaultValue);
}

export function getBoolEnvVar(name: string, defaultValue?: boolean): boolean {
  const value = valueOrExitIfUndefined(name, defaultValue);
  if (typeof value === 'string') {
    const str = value.toLowerCase();
    return str === 'true' || str === '1';
  }
  return value;
}

export function getNumberEnvVar(name: string, defaultValue?: number): number {
  const value = valueOrExitIfUndefined(name, defaultValue);
  if (typeof value === 'string') {
    const num = Number(value);
    if (Number.isNaN(num)) {
      console.error(`invalid number env. var. ${name} (${value})`);
      process.exit(1);
    }
    return num;
  }
  return value;
}

/**
 * NODE ENV
 */

type NodeEnv =
    | 'production'
    | 'development';

const rawNodeEnv = getEnvVar('NODE_ENV');
if (rawNodeEnv !== 'development' && rawNodeEnv !== 'production') {
  throw new Error(`Unsupported env: ${rawNodeEnv}`);
}

export const nodeEnv: NodeEnv = rawNodeEnv;
export const isProd = nodeEnv === 'production';
export const isDev = nodeEnv === 'development';

export const devOnly = <T>(value: T): T | undefined => (isDev ? value : undefined);

/**
 * GLOBALS
 */

export const port = getNumberEnvVar('PORT', 8080);

export const webappRoot = isProd && getEnvVar('WEBAPP_ROOT');
