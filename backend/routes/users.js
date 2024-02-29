const router = require('express').Router();

router.route('/:id').get((req,res)=>{          
  return res.json('Exercise updated!')
});

module.exports=router;