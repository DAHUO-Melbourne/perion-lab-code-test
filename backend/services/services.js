const request = require('request');
require('dotenv').config();

const apiKey = process.env.API_KEY;

const getGamesListBySteamId = (id, callback) => {
  try {
    const apiUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${id}&format=json&include_appinfo=1`
    request(apiUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body)
        callback(data.response, null);
      } else {
        callback(null, { error: error });
      }
    });
  } catch (err) {
    callback(null, { error: err.message });
  }
}

module.exports={
  getGamesListBySteamId,
}