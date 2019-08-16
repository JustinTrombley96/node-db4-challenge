const express = require('express');

const recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
	recipes
		.getRecipes()
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

router.get('/:id/ingredients', (req, res) => {
	const { id } = req.params;
	recipes
		.getShoppingList(id)
		.then(ingredients => {
			res.status(200).json(ingredients);
		})
		.catch(err => {
			res.status(500).json({ message: 'failed to get ingredients' });
		});
});

// router.get('/:id/ingredients', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const ingredients = await recipes.getShoppingList(id);

//     if (ingredients.length) {
//       res.json(ingredients);
//     } else {
//       res
//         .status(404)
//         .json({ message: 'Could not find ingredients for given recipe' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get ingredients' });
//   }
// });

module.exports = router;
