var express = require('express');
var router = express.Router();

// Create custom homepage
// --------------------------------------------------
router.get('/', function(req, res, next) {
  const users = req.app.locals.users;

  users.find().limit(3).toArray((err, recent) => {
    res.render('index', { recent } );
  });
});
// --------------------------------------------------

module.exports = router;
