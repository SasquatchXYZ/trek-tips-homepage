import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 5,
    maxWidth: 960,
    backgroundColor: '#B500A9'
  },
  media: {
    objectFit: 'cover',
  },
});

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Trek Tips on iPhone X"
          className={classes.media}
          height="623"
          image={props.image}
          title="iPhone X"
        />
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);