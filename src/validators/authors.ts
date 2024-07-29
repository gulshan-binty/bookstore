import { body } from 'express-validator';

export const validateAuthor = [
  body('name').isString().notEmpty().withMessage('Name is required'),
  body('birthdate').isDate().withMessage('Birthdate must be a valid date'),
];
