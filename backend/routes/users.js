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

module.exports=router;