# CRUD API with Express, Node.js, and Mongoose

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project is a simple CRUD (Create, Read, Update, Delete) API built using Express.js, Node.js, and Mongoose. It provides basic functionality for managing resources in a MongoDB database, making it an ideal starting point for backend developers or as a base for more complex applications.

## Features

- Create a new product
- Read all product or a specific product
- Update an existing product
- Delete a product

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **Mongoose**: ODM library for MongoDB
- **MongoDB**: NoSQL database for data storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prasish01/crud_api.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `conifg.env` file in the root directory and add the following:
   ```env
   DB_URL=mongodb+srv://username:password@cluster0.mongodb.net/databaseName?retryWrites=true&w=majority
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the API endpoints.
- Ensure MongoDB is running and the `DB_URL` in the `.env` file is correctly configured.

## API Endpoints

### Base URL

```
http://localhost:3000/api
```
