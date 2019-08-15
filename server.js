const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');

const server = express();
server.use(helmet());

server.get('/api/recipes', async (req, res) => {
	try {
		const recipes = await db('recipes');
		res.status(200).json(recipes);
	} catch (error) {
		res.status(500).json(error);
	}
});

// server.get('/api/ingredients', async ( req, res) => {
//     try {
//         const ingredients = await db('ingredients')
//         .leftJoin('', '', '')
//     }
// })

module.exports = server;
