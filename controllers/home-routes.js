const router = require('express').Router();

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    return res.render('homepage');
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
router.get('/progress', (req, res) => {
  return res.render('progress', {
    title: 'Progress'
  });
});

//Garden Route
router.get('/garden', (req, res) => {
  return res.render('garden', {
    title: 'Garden'
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
