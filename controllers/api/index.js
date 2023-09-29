const router = require('express').Router();

// /api/users
const userRoutes = require('./user-routes');
const gardenRoutes = require('./garden-routes');
const progressRoutes = require('./progress-routes');

router.use('/users', userRoutes);
router.use('/garden', gardenRoutes);
router.use('/progress', progressRoutes);

module.exports = router;
