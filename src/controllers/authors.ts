import { Request, Response } from 'express';
import knex from '../db/knex';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await knex('authors').select('*');
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const author = await knex('authors').where({ id }).first();
    if (!author) return res.status(404).json({ error: 'Author not found' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { name, bio, birthdate } = req.body;
    await knex('authors').insert({ name, bio, birthdate });
    res.status(201).json({ message: 'Author created' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, bio, birthdate } = req.body;
    await knex('authors').where({ id }).update({ name, bio, birthdate });
    res.json({ message: 'Author updated' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await knex('authors').where({ id }).del();
    res.json({ message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};
