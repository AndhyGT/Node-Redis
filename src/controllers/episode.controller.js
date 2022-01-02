const axios = require('axios');

const client = require('../db/config');

const getAllEpisodes = async (req, resp) => {
    try{
        await client.connect();

        const allEpisodes = await client.get('episodes');
        if (allEpisodes) {
            resp.json(JSON.parse(allEpisodes));
        } else {
            const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
            await client.set('episodes', JSON.stringify(response.data));
            resp.json(response.data);
        }

        await client.disconnect();
    }catch(err){
        return resp.status(error.response.status)
            .json({ message: error.message });
    }
}


module.exports = {
    getAllEpisodes
}