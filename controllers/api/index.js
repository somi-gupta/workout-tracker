const router = require('express').Router();
const workoutRoutes = require('./workout');

router.use('/', workoutRoutes);


module.exports = router;
