const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Email
      .find({})
      .sort({date: -1})
      .then(dbEmails => res.status(200).json(dbEmails))
      .catch(err => res.status(502).json(err))
  },

  create: (req, res) => {
    console.log(req.body);

    db.Email
      .create(req.body)
      .then(dbEmail => res.status(200).json(dbEmail))
      .catch(err => res.status(502).json(err))
  }

};