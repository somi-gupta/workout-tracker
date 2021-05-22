const router = require('express').Router();

// const apiRoutes = require('./api');
const statsRoutes = require('./stats-routes.js');
const workoutRoutes = require('./workout');


router.use('/', statsRoutes);
router.use('/api', workoutRoutes);

module.exports = router;
