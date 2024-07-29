import { Router } from 'express';
import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from '../controllers/authors';
import { validateAuthor } from '../validators/authors';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', validateAuthor, handleValidationErrors, createAuthor);
router.put('/:id', validateAuthor, handleValidationErrors, updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;
