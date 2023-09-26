const router = require('express').Router();

// GET all posts for homepage
router.get('/', async (req, res) => {
  try { if (req.session.loggedIn) {
    return res.redirect('/profile')
  }
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
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  return res.render('progress', {
    title: 'Progress'
  });
});

//Profile Route
router.get('/profile', (req,res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  return res.render('profile', {
    title: 'Profile'
  });
});

module.exports = router;
