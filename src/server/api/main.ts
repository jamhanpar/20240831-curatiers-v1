import express from 'express';
import ViteExpress from 'vite-express';
import { config } from 'dotenv';
import AmazonProductsData from '../mockData/AmazonProductData.json' assert { type: 'json' };
import productsRouter from './products/products';
import usersRouter from './users/users';

config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use('./api/products', productsRouter);
app.use('./api/users', usersRouter);

// TEST API routes before making them into routers
app.get('/api/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!');
});

// app.get('/products', (_, res) => {
//   res.send(AmazonProductsData.results);
// });

ViteExpress.listen(app, +PORT, () =>
  console.log('Server is listening on port 3000...')
);
