"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthor = void 0;
const express_validator_1 = require("express-validator");
exports.validateAuthor = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('birthdate').isDate().withMessage('Birthdate must be a valid date'),
];
