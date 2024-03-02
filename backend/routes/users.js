const router = require('express').Router();
const services = require('../services/services');

router.route('/:id').get((req,res)=>{
  const userId = req.params.id
  services.getGamesListBySteamId(userId, (response, error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      const games = response.games.map((game) => {
        return {
          name: game.name,
          time: (game.playtime_forever / 60).toFixed(2)
        }
      });
      res.json(games);
    }
  });
});

router.route('/getSummaryData/:id').get((req,res)=>{
  const userId = req.params.id
  services.getGamesListBySteamId(userId, (response, error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      const gamesCount = response.game_count;
      const mostPlayedGame = response.games.sort((a, b) => b.playtime_forever - a.playtime_forever)[0];
      const totalPlaytime = response.games.reduce((total, obj) => obj.playtime_forever + total, 0);
      const result = {
        gamesCount,
        mostPlayedGame,
        totalPlaytime: (totalPlaytime / 60).toFixed(2),
      }
      res.json(result);
    }
  });
});

module.exports=router;