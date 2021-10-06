import React, { useEffect, useState } from 'react';
import Header from '../../common/Header/Header';
import Main from '../../common/Main/Main';
import { useStyles } from './MainPageStyle';
import logo from '../../../images/spaceLandLogo.png';

const MainPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Main>
        <div className={classes.container}>
          <img src={logo} alt="space-land-logo" />
        </div>
      </Main>
    </div>
  );
};

export default MainPage;
