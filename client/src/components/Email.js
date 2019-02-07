import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../utils/API';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 10
  },
  textField: {
    marginLeft: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class EmailForm extends Component {
  state = {
    open: false,
    messageShow: false,
    message: '',
    email: ''
  };

  handleClickOpen = () => {
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({
      open: false,
      message: false,
      email: ''
    })
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({email: event.target.value})
  };

  handleFormSubmit = () => {
    const emailRX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    if (emailRX.test(this.state.email)) {
      console.log('Send to Database!');
      API.submitEmail({email: this.state.email})
        .then(res => {
          console.log(res);
          this.setState({
            open: false,
            messageShow: false,
            message: '',
            email: ''
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            messageShow: true,
            message: 'Please Enter a Valid Email.'
          })
        })
    } else {
      console.log('That is not a valid Email...');
      this.setState({
        messageShow: true,
        message: 'Please Enter a valid Email.'
      })
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" color="primary">
              Get Trek Tips Updates
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Enter Email
            </Button>
          </Grid>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To get updates about Trek Tips, please enter your email address here. Your email will only be used to
                send you occasion updates about the app.
              </DialogContentText>
              {!this.state.messageShow
                ? null
                : <DialogContentText color="primary">
                  {this.state.message}
                </DialogContentText>
              }
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleFormSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </div>
    );
  }
}

EmailForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailForm);