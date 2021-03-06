const {
    sequelize,
    User,
    Recipe,
    Bookmark,
    Ingredient,
    RecipeIngredient,
    Step,
    RecipeStep,
    Measurement
} = require('../src/models')

// Bluebird is to make sure that all the database has been seeded before doing anything else
const Promise = require('bluebird')
const users = require('./user.json')
const recipes = require('./recipe.json')
const bookmarks = require('./bookmark.json')
const ingredients = require('./ingredient.json')
const recipeIngredients = require('./recipeIngredient.json')
const steps = require('./step.json')
const recipeSteps = require('./recipeStep.json')
const measurements = require('./measurement.json')



sequelize.sync({force:true})
    .then(async function() {
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )

        await Promise.all(
            recipes.map(recipe => {
                Recipe.create(recipe)
            })
        )

        await Promise.all(
            bookmarks.map(bookmark => {
                Bookmark.create(bookmark)
            })
        )

        await Promise.all(
            ingredients.map(ingredient => {
                Ingredient.create(ingredient)
            })
        )

        await Promise.all(
            measurements.map(measurement => {
                Measurement.create(measurement)
            })
        )

        await Promise.all(
            recipeIngredients.map(recipeIngredient => {
                RecipeIngredient.create(recipeIngredient)
            })
        )

        await Promise.all(
            steps.map(step => {
                Step.create(step)
            })
        )

        await Promise.all(
            recipeSteps.map(recipeStep => {
                RecipeStep.create(recipeStep)
            })
        )
    })
