import { Hono } from 'hono';
import { bearerAuth } from 'hono/bearer-auth';

const app = new Hono();

const port = parseInt(process.env.PORT) || 8000;

const home = app.get('/', (c) => {
  return c.json({ message: 'Hello World!' });
});

const token = 'thesecrettoken';

app.use('/auth/*', bearerAuth({ token }));

app.get('/auth/test', (c) => {
  return c.json({ message: 'You are authorized to access this application' });
});

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: home.fetch,
};
