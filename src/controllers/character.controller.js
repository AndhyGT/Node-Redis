const axios = require('axios');

const client = require('../db/config');

/**
 * Function for get characters
 * @param {*} req 
 * @param {*} resp 
 */
const getCharacters = async (req, resp) => {
    try{
        await client.connect();

        const replyCharacters = await client.get('character');
        if (replyCharacters) {
            resp.json(JSON.parse(replyCharacters));
        } else {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            await client.set('character', JSON.stringify(response.data));
            resp.json(response.data);
        }

        await client.disconnect();

    }catch(err){
       console.log(`Error: ${err}`);
    }
};

/**
 * Function for get character by ID
 * @param {*} req 
 * @param {*} resp 
 */
const getCharacterById = async(req, resp) => {
    const idCharacter = req.params.id;

    try{
        await client.connect();

        const replyCharacter = await client.get(idCharacter);
        if (replyCharacter) {
            resp.json(JSON.parse(replyCharacter));
        } else {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${idCharacter}`);
            await client.set(idCharacter, JSON.stringify(response.data));
            resp.json(response.data);
        }

        await client.disconnect();
    } catch (error){
        return resp.status(error.response.status)
                .json({ message: error.message });
    }
}

module.exports = {
    getCharacters,
    getCharacterById
}