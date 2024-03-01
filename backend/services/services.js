const request = require('request');
require('dotenv').config();

const apiKey = process.env.API_KEY;

const getGamesListBySteamId = (id, callback) => {
  try {
    const apiUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${id}`
    request(apiUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body)
        callback(data, null);
      } else {
        callback(null, { error: error });
      }
    });
  } catch (err) {
    callback(null, { error: err.message });
  }
}

const getGameInfoByAppId = (id, callback) => {
  const apiUrl = `https://store.steampowered.com/api/appdetails/?appids=${id}`
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body)
      callback(data);
    }
  });
}

module.exports={
  getGamesListBySteamId,
  getGameInfoByAppId,
}