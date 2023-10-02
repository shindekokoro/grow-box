const router = require('express').Router();
const { Progress, Garden } = require('../models');
const isAuthed = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    // If user is logged in, always re-direct to their garden.
    if (req.session.loggedIn) {
      return res.redirect('/progress');
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
router.get('/progress/:id?', isAuthed, async (req, res) => {
  let where = { user_id: req.session.user_id };
  req.params.id ? (where.garden_id = req.params.id) : '';
  const progressLogs = await Progress.findAll({
    where,
    include: [{ model: Garden }],
    raw: true
  });
  const dbGarden = await Garden.findAll({
    where: { user_id: req.session.user_id },
    raw: true
  });
  return res.render('progress', {
    title: 'Progress',
    progress: true,
    progressLogs,
    plants: dbGarden,
    garden_id: req.params.id ? req.params.id : null,
    loggedIn: req.session.loggedIn,
    username: req.session.username
  });
});

//Garden Route
router.get('/garden', isAuthed, async (req, res) => {
  const dbGarden = await Garden.findAll({
    where: { user_id: req.session.user_id },
    raw: true
  });
  return res.render('garden', {
    title: 'My Garden',
    plants: dbGarden,
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
