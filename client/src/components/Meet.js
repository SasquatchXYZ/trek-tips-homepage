import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IntroPic from '../img/pixel.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  text: {
    margin: theme.spacing.unit * 2,
    fontWeight: 400
  },
  image: {
    width: 400,
    height: 499,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function MeetTrekTips(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm container direction="column">
          <Typography variant="h4" color="primary">
            Meet Trek Tips...
          </Typography>
          <Typography className={classes.text} variant="h6">
            Trek Tips is a travel application aiming to provide users with the best travel experience possible by providing customized, user-specific recommendations for all your needs in a new or unfamiliar location.
          </Typography>
          <Typography className={classes.text} variant="h6">
            Whether it is restaurants, museums, nightclubs, or a relaxing day at the spa... You get to select your preferences and Trek Tips will suggest things unique to you, wherever you are!
          </Typography>
        </Grid>
        <Grid item className={classes.image}>
          <img className={classes.img} alt="complex" src={IntroPic}/>
        </Grid>
      </Grid>
    </div>
  );
}

MeetTrekTips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetTrekTips);