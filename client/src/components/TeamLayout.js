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
            direction="column"
            alignItems="center"

          >
            <Grid item>
              <TeamCard
                name="Michael Kelley"
                email="mjkelley354@gmail.com"
                about="Product Manager for Systems Management Software at NCR Corporation.  I’m currently working as a product manager but have previously worked as a product owner and professional services business and technical consultant for the ATM and banking industry."
                goal="I’m focused on process and technology improvements to improve data visualization and analysis for all things in Systems Management.  Traditionally the approaches to managing complex systems have been reactive and constrained by the rules defined by the technology choices.  I am interested in finding ways to use predictive algorithms and big data analysis to be proactive instead."
                gitHub="https://github.com/mjkelley354"
              />
            </Grid>
            <Grid item>
              <TeamCard
                name="Brintza Miles"
                email="brintzamiles@gmail.com"
                about="Experienced IT Analyst/Software Developer/Consultant with a demonstrated history of working in the management consulting, problem management and software development industries. Skilled in Management, Strategic Planning,"
                goal="Full-Stack Development, Business Strategy, Business Analysis, Problem Management, and Software Development."
                gitHub="https://github.com/brintzamiles"
              />
            </Grid>
            <Grid item>
              <TeamCard
                name="Meeyoung Park"
                email="parkmee@gmail.com"
                about="Public health informatician and epidemiologist working at the Centers for Disease Control and Prevention in situational awareness for emergency operations. Over 10 years working in electronic disease surveillance and public health information and data management systems."
                goal="To develop intuitive, interoperable apps and data systems to help modernize public health and emergency operations"
                gitHub="https://github.com/parkmee"
                portfolio="https://parkmee.github.io/"
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