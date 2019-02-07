import React, {Component} from 'react';
import Nav from '../components/Nav';
import Paper from '../components/Paper';
import ImageCard from '../components/ImageCard';
import Typography from '@material-ui/core/Typography'
import InUse from '../img/mockup2md.jpg';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <Nav
          linkTo="/"
          linkTitle="Return To Safety"
        />
        <Paper>
          <Typography variant="h4" color="primary">404: Page Not Found.</Typography>
        </Paper>
        < ImageCard
          image={InUse}
        />
      </div>
    )
  }
}