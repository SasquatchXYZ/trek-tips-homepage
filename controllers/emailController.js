const db = require('../models');

module.exports = {

  create: (req, res) => {
    console.log(req.body);

    db.Email
      .create(req.body)
      .then(dbEmail => res.status(200).json(dbEmail))
      .catch(err => res.status(502).json(err))
  }

};