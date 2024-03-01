const router = require('express').Router();
const services = require('../services/services');

router.route('/:id').get((req,res)=>{
  const userId = req.params.id
  services.getGamesListBySteamId(userId, (gamesInfo, error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(gamesInfo);
    }
  });
});

module.exports=router;