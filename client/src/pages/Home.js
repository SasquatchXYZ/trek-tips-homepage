import React, {Component} from 'react';
import Nav from '../components/Nav';
import Paper from '../components/Paper';
import Meet from '../components/Meet';
import ImageCard from '../components/ImageCard';
import List from '../components/List';
import FAQ from '../components/FAQ';
import EmailForm from '../components/Email';
import Typography from '@material-ui/core/Typography';
import ThreeScreens from '../img/threelg.png';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav
          linkTo="/about"
          linkTitle="The Team"
        />
        <Paper>
          <Meet/>
        </Paper>
        <Paper>
          <List/>
        </Paper>
        <ImageCard
          image={ThreeScreens}
        />
        <Paper>
          <Typography
            variant="h4"
            color="primary"
          >
            Frequently Asked Questions
          </Typography>
          <FAQ/>
        </Paper>
        <Paper>
          <EmailForm/>
        </Paper>
      </div>
    )
  }
}