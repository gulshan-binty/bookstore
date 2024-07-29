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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAuthors = void 0;
const knex_1 = __importDefault(require("../db/knex"));
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield (0, knex_1.default)('authors').select('*');
        res.json(authors);
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.getAuthors = getAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const author = yield (0, knex_1.default)('authors').where({ id }).first();
        if (!author)
            return res.status(404).json({ error: 'Author not found' });
        res.json(author);
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, bio, birthdate } = req.body;
        yield (0, knex_1.default)('authors').insert({ name, bio, birthdate });
        res.status(201).json({ message: 'Author created' });
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, bio, birthdate } = req.body;
        yield (0, knex_1.default)('authors').where({ id }).update({ name, bio, birthdate });
        res.json({ message: 'Author updated' });
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, knex_1.default)('authors').where({ id }).del();
        res.json({ message: 'Author deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
exports.deleteAuthor = deleteAuthor;
