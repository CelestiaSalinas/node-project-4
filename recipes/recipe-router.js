const express = require('express');

const Recipes = require('./recipe-model');
const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "Could not retrieve recipes" })
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    Recipes.getRecipeById(id)
    .then(recipe => {
        if (recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({ errorMessage: "No recipe found" })
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "Encountered error while finding recipe" })
    })
})

router.get("/shoppinglist", (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(recipe_id)
    .then(recipe => {
        if (recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({ errorMessage: "No recipe found" })
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "Encountered error while finding recipe" })
    })
})

router.get("/instructions", (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(recipe_id)
    .then(recipe => {
        if (recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(404).json({ errorMessage: "No recipe found" })
        }
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "Encountered error while finding recipe" })
    })
})

module.exports = router;