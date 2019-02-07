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
    console.log(req.body.email);

    const emailRX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    if (emailRX.test(req.body.email)) {
      console.log('Send to Database!');
      db.Email
        .create(req.body)
        .then(dbEmail => res.status(200).json(dbEmail))
        .catch(err => res.status(502).json(err))
    } else {
      console.log('That is not a valid Email...');
      res.status(502).send('test')
    }

    /*db.Email
      .create(req.body)
      .then(dbEmail => res.status(200).json(dbEmail))
      .catch(err => res.status(502).json(err))*/
  }

};