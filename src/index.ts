import express from 'express';
import dotenv from 'dotenv';
import authorRoutes from './routes/authors';
import bookRoutes from './routes/books';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
