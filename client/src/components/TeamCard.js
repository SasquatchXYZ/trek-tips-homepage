import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 450
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const {classes} = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.email}
        </Typography>
        <Typography component="p">
          About Me:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.about}
        </Typography>
        <Typography component="p">
          Professional Goal:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.goal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={props.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          GitHub
        </Button>
        {props.portfolio
          ? <Button
            size="small"
            href={props.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            Portfolio
          </Button>
          : null}
      </CardActions>

    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);