const {Router} = require('express');

const { getCharacters, getCharacterById } = require('../controllers/character.controller');

const routes = Router();

routes.get('/', getCharacters)
routes.get('/:id', getCharacterById)

module.exports = routes;