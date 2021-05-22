const router = require('express').Router();
const { Workout } = require('../../models');

// GET all workout for homepage
router.get('/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });


router.post('/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

  router.put("/workouts/:id",({body, params},res)=>{   
    console.log(body,params);
    Workout.findOneAndUpdate(  
     { _id: params.id },
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

router.get("/workouts/range", (req, res) => {
    Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  module.exports = router;

