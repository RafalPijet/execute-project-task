import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './HeaderStyle';

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <p style={{ textAlign: 'center' }}>Header</p>
    </AppBar>
  );
};

export default Header;
