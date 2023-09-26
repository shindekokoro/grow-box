const router = require('express').Router();

// /api/users
const userRoutes = require('./user-routes');
router.use('/users', userRoutes);

module.exports = router;
