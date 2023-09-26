const router = require('express').Router();
const { Post } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));
    return res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
      username: req.session.username
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
// Signup Route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  return res.render('signup', {
    title: 'Signup'
  });
});

module.exports = router;
