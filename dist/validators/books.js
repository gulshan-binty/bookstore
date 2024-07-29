"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBook = void 0;
const express_validator_1 = require("express-validator");
exports.validateBook = [
    (0, express_validator_1.body)('title').isString().notEmpty().withMessage('Title is required'),
    (0, express_validator_1.body)('published_date').isDate().withMessage('Published date must be a valid date'),
    (0, express_validator_1.body)('author_id').isInt().withMessage('Author ID must be an integer'),
];
