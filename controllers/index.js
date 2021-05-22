const router = require('express').Router();

const apiRoutes = require('./api');
const statsRoutes = require('./stats-routes.js');


router.use('/', statsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
