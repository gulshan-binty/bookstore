import { body } from 'express-validator';

export const validateBook = [
  body('title').isString().notEmpty().withMessage('Title is required'),
  body('published_date').isDate().withMessage('Published date must be a valid date'),
  body('author_id').isInt().withMessage('Author ID must be an integer'),
];
