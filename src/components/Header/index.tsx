import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';

export default class Header extends React.PureComponent<{}, {open: boolean}>{
  state = {
    open: false
  }

  toggle = () => this.setState((prevState) => ({
    open: !prevState.open
  }));

  render() {
    return (
      <AppBar position="static">
        <Toolbar classes={styles.Toolbar} disableGutters>
          <IconButton color="inherit" onClick={this.toggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">E-sports arena</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}