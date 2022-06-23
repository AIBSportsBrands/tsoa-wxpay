import express, { Response as ExResponse, Request as ExRequest } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { RegisterRoutes } from './controllers/routes';

export const app = express();

app.use(
  cors({
    allowedHeaders: '*',
    exposedHeaders: '*',
  }),
);

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => res.send(
  swaggerUi.generateHTML(await import('./controllers/swagger.json')),
));

RegisterRoutes(app);
