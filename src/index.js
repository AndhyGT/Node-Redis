const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');

const app = express();

app.use(responseTime());
app.use('/character', require('./routes/character.routes'));
app.use('/episode', require('./routes/episode.routes'));

app.listen(3000);
console.log('Server on port 3000');