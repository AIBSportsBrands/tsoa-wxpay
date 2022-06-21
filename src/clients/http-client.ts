/**
 * IMPORTS
 */

import got from 'got';

/**
 * CORE
 */

export const httpClient = got.extend({
  hooks: {
    beforeError: [
      (error) => {
        const { response, options } = error;
        const msg = `Request "${options.method} ${options.url}" failed`;
        const statusCode = response && response.statusCode;
        if (statusCode) {
          console.warn(`${msg} (${statusCode})`);
        } else {
          console.warn(msg);
        }
        return error;
      },
    ],
  },
});
