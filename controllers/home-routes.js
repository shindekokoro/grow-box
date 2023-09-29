const router = require('express').Router();
const { Progress } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    // If user is logged in, always re-direct to their garden.
    if (req.session.loggedIn) {
      return res.redirect('/garden');
    }
    return res.render('homepage', {
      title: 'Grow Box',
      loggedIn: req.session.loggedIn,
      username: req.session.session
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Login Route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  return res.render('login', {
    title: 'Login'
  });
});

// Progress Route
router.get('/progress', async (req, res) => {
  const dbProgress = await Progress.findAll({
    where: { user_id: req.session.user_id },
    raw: true
  });
  return res.render('progress', {
    title: 'Progress',
    logs: dbProgress,
    loggedIn: req.session.loggedIn,
    username: req.session.username
  });
});

//Garden Route
router.get('/garden', (req, res) => {
  return res.render('garden', {
    title: 'Garden',
    loggedIn: req.session.loggedIn,
    username: req.session.username
  });
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  return res.render('signup', {
    title: 'Signup'
  });
});

module.exports = router;
