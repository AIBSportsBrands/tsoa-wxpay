/**
 * IMPORTS
 */

import { app } from './app';

import { port } from './env';

/**
 * CORE
 */

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
