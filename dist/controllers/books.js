"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getBooks = void 0;
const knex_1 = __importDefault(require("../db/knex"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, knex_1.default)('books').select('*');
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield (0, knex_1.default)('books').where({ id }).first();
        if (!book)
            return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.getBookById = getBookById;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, published_date, author_id } = req.body;
        yield (0, knex_1.default)('books').insert({ title, description, published_date, author_id });
        res.status(201).json({ message: 'Book created' });
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description, published_date, author_id } = req.body;
        yield (0, knex_1.default)('books').where({ id }).update({ title, description, published_date, author_id });
        res.json({ message: 'Book updated' });
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, knex_1.default)('books').where({ id }).del();
        res.json({ message: 'Book deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.deleteBook = deleteBook;
