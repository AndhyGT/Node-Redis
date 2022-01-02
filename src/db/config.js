const redis = require('redis');

const client  = redis.createClient({
    host: 'localhost',
    port: 6369
});

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;