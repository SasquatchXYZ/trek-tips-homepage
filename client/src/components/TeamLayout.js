import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TeamCard from './TeamCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class TeamLayout extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <Grid container
            className={classes.root}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={24}
            justify="space-evenly"
            direction="row"
            alignItems="center"

          >
            <Grid item>
              <TeamCard
                name="Michael Kelley"
                gitHub="https://github.com/mjkelley354"
              />
            </Grid>
            <Grid item>
              <TeamCard
                name="Brintza Miles"
                gitHub="https://github.com/brintzamiles"
              />
            </Grid>
            <Grid item>
              <TeamCard
                name="Meeyoung Park"
                email="parkmee@gmail.com"
                about="Public health informatician and epidemiologist working at the Centers for Disease Control and Prevention in situational awareness for emergency operations. Over 10 years working in electronic disease surveillance and public health information and data management systems."
                goal="To develop intuitive, interoperable apps and data systems to help modernize public health and emergency operations operations"
                gitHub="https://github.com/parkmee"
              />
            </Grid>
            <Grid item>
              <TeamCard
                name="Dalton Ricker"
                about="Full Stack Web Developer and Marine Engineer.  Over 8 years of experience sailing the high seas in support of the United States Navy, fixing anything and everything vaguely mechanical or electrical.  Highly skilled at solving-problems and troubleshooting with a deep understanding of steam, motor, and gas turbine power plants."
                goal="To always be learning, always improving both personally and professionally."
                email="dalton.ricker.2011@graduate.usmma.edu"
                gitHub="https://github.com/SasquatchXYZ"
                portfolio="https://sasquatchxyz.github.io/Basic-Portfolio/"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TeamLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamLayout);