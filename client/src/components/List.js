import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import Settings from '@material-ui/icons/Settings';
import DoneAll from '@material-ui/icons/DoneAll';
import TurnedIn from '@material-ui/icons/TurnedIn';
import Room from '@material-ui/icons/RoomRounded';

import InfoPic from '../img/dualpref.png';

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
  text: {},
  image: {
    width: 425,
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
        <Grid item xs={12} sm container className={classes.text} direction="column">
          {/*<Typography variant="h4" color="primary">
            Meet Trek Tips...
          </Typography>*/}
          {/*<Typography gutterBottom variant="subtitle1">
            Standard license
          </Typography>*/}
          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <FlightTakeoff color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary="Travel Smarter"
                secondary="Plan out activities for your next journey; you'll never arrive without knowing what awaits you at your destination."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Settings color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary="All-About-You"
                secondary="Set and update your preferences to reflect your unique personality, and receive recommendations based off these preferences as well as your past selections."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Room color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary="Location Based"
                secondary="Search where you are, or where you will be going, to get a recommendations based on your own "
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <TurnedIn color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary="Bookmark Recommendations"
                secondary="We know you never have enough time to do all the things you want to do while travelling, so keep track of the memorable ones."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <DoneAll color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary="Completed"
                secondary="Check off selections on your list as you complete them.  (Don't worry, they'll still stay saved in case you forget the name of that restaurant in Brisbane...)"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item className={classes.image}>
          <img className={classes.img} alt="complex" src={InfoPic}/>
        </Grid>
      </Grid>
    </div>
  );
}

MeetTrekTips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetTrekTips);