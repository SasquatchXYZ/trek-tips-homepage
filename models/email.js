const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  email: {
    type: String,
    trim: true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i, 'Please provide a valid email address']
    required: [true, 'User Email is Required']
  }
});

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;

/*
const EmailSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(v)
      },
      message: props => `${props.value} is not a valid email`
    },
    require: [true, 'user email is required']
  }
});*/
