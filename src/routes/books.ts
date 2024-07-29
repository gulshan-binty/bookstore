import { Router } from 'express';
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/books';
import { validateBook } from '../validators/books';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', validateBook, handleValidationErrors, createBook);
router.put('/:id', validateBook, handleValidationErrors, updateBook);
router.delete('/:id', deleteBook);

export default router;
