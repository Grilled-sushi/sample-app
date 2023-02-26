const express = require('express');
const router = express.Router();

let users = new Set();

/* GET home page. */
router.route("/")
  .get(function(req, res, next) {
    res.render('index', {
      title: 'サインイン',
      users: users
    });
  })
  .post(function(req, res, next) {
    users.add([req.body.email, req.body.password]);
    res.redirect("/");
  });


module.exports = router;
