import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const {classes} = this.props;
    const {expanded} = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>What is Trek Tips?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              Trek Tips is a free travel companion application that allows you to search within a given area for
              upcoming events or attractions based on categories or your personal preferences.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>Why use Trek Tips?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              Travelling can be stressful, and it can seem daunting to research things to do or see in a completely new
              and unfamiliar location, so we aim to take some of that stress away. By selecting your personal
              preferences Trek Tips will attempt to give you suggestions tailored specifically to you.
              <br/>
              You don't have to be travelling to use Trek Tips either. Since it uses your selected preferences, you can
              use it wherever you are to find restaurants or events you may not have discovered before.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>What do I need to sign up?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              To set up an account you simply need an email address. We also give you the option of signing in with
              Google or Facebook if you would prefer those methods.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>Can I save recommendations or suggestions for later?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              Yes! You are able to bookmark and save anything you come across to view later. You can also mark these
              places has having been visited, but still keep them saved for your own personal history.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>What personal data does Trek Tips have access to?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              Trek Tips only requires an email address to sign up; no other personal information is required. If you
              chose to sign in using Facebook or Google, the only information that is collected from those sites is your
              name and email if it is listed. No additional information is necessary to use Trek Tips.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>Can I Change My Preferences?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              Yes! At any time while you are using the application you are able to change or update your preferences.
              Simply navigate to the preferences screen from the home screen, make your changes and save them.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>How can I get Trek Tips?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography color="primary">
              Currently Trek Tips is in development before release, but in the future Trek Tips will be available on both iOS and Android from the Apple Store and Google Play Store respectively.  If you wish you get updates on the apps progress you can submit your email address below.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);