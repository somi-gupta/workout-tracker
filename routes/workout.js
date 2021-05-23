const router = require('express').Router();
const  Workout = require('../models/workout.js');

// GET all workout for homepage
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{ totalDuration: { $sum: "$exercises.duration"}}
    }
  ])
    .then(dbWorkout=> {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts", ({body}, res) =>{
    Workout.create(body)
    .then(dbWorkout=>{
      res.json(dbWorkout)
    })
    .catch(err => {
      console.log(err.message);
      res.status(400).json(err);
    })
  })

  router.put("/api/workouts/:id",(req,res)=>{ 
    const id = req.params.id;
    const body = req.body;  
    
    Workout.findByIdAndUpdate(  
      { _id: id },
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

module.exports = router;

