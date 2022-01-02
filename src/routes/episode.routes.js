const { Router } = require('express');
const { getAllEpisodes } = require('../controllers/episode.controller');


const routes = Router();

routes.get('/', getAllEpisodes);

module.exports = routes;