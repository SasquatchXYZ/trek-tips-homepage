const router = require('express').Router();
const emailController = require('../../controllers/emailController');

// Matches with 'api/email'
router.route('/')
  .get(emailController.findAll)
  .post(emailController.create);

module.exports = router;