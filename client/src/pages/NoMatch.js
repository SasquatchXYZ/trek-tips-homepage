import React, { Component } from 'react';
import Nav from '../components/Nav';
import Typography from '@material-ui/core/Typography'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <Nav
          linkTo="/"
          linkTitle="Return To Safety"
        />
        <Typography variant="h4" color="primary">insert 404 message here.... :)</Typography>
      </div>
    )
  }
}