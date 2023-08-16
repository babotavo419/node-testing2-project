const express = require('express');
const db = require('./db-config');

const server = express();

server.use(express.json()); // Middleware for parsing JSON request bodies

server.get('/', (req, res) => {
    res.status(200).json({ message: "API is up and running!" });
});

// An example endpoint to fetch data from the `items` table in your SQLite database
server.get('/items', async (req, res) => {
    try {
        const items = await db('items');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error: error.message });
    }
});

// You can add more endpoints as required.

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

module.exports = server; // Exporting for testing purposes

