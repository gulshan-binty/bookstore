# Bookstore API

A RESTful API for managing a bookstore, built with TypeScript, Express, and PostgreSQL.

## Table of Contents

- [Bookstore API](#bookstore-api)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Scripts](#scripts)
  - [API Endpoints](#api-endpoints)
    - [Authors](#authors)
    - [Books](#books)
  - [Database Schema](#database-schema)
    - [Authors Table](#authors-table)
    - [Books Table](#books-table)
  - [Error Handling](#error-handling)
  - [Validation](#validation)
  - [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. **Clone the repository**:

    ```sh
    git clone  (https://github.com/gulshan-binty/bookstore.git)
    cd bookstore-api
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Install PostgreSQL**:
    - Follow the instructions to install PostgreSQL on your operating system: [PostgreSQL Downloads](https://www.postgresql.org/download/)
    - Create a new database for the project.

## Setup

1. **Create a `.env` file in the root directory and add your environment variables**:

    ```sh
    DATABASE_URL=postgres://yourusername:yourpassword@localhost/yourdatabase
    PORT=3000
    ```


## Scripts

- **Build the project**:

    ```sh
    npm run build
    ```

- **Start the server**:

    ```sh
    npm start
    ```

- **Run the server in development mode** (with auto-reloading):

    ```sh
    npm run dev
    ```

## API Endpoints

### Authors

- **GET /authors**: Retrieve a list of all authors.
- **GET /authors/:id**: Retrieve details of a single author.
- **POST /authors**: Create a new author.
- **PUT /authors/:id**: Update an existing author.
- **DELETE /authors/:id**: Delete an author.

### Books

- **GET /books**: Retrieve a list of all books.
- **GET /books/:id**: Retrieve details of a single book.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update an existing book.
- **DELETE /books/:id**: Delete a book.
- **GET /authors/:id/books**: Retrieve a list of all books written by a specific author.
- **GET /books/author/:id**: Retrieve a list of all books by a specific author.

## Database Schema

### Authors Table

- `id` (primary key, auto-increment)
- `name` (string, required)
- `bio` (text, optional)
- `birthdate` (date, required)

### Books Table

- `id` (primary key, auto-increment)
- `title` (string, required)
- `description` (text, optional)
- `published_date` (date, required)
- `author_id` (foreign key, references `authors.id`, required)

## Error Handling

- Proper error handling is implemented to return meaningful HTTP status codes and error messages.
- Common errors like resource not found, validation errors, and database connection errors are handled.

## Validation

- Validation is implemented using `express-validator`.
- Ensure that:
  - `name` is a non-empty string.
  - `birthdate` is a valid date.
  - `title` is a non-empty string.
  - `published_date` is a valid date.
  - `author_id` is a valid reference to an existing author.

## License

This project is licensed under the MIT License.

