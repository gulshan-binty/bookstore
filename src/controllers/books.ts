import { Request, Response } from 'express';
import knex from '../db/knex';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await knex('books').select('*');
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await knex('books').where({ id }).first();
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description, published_date, author_id } = req.body;
    await knex('books').insert({ title, description, published_date, author_id });
    res.status(201).json({ message: 'Book created' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, published_date, author_id } = req.body;
    await knex('books').where({ id }).update({ title, description, published_date, author_id });
    res.json({ message: 'Book updated' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await knex('books').where({ id }).del();
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};
