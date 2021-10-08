import React from 'react';
import { useStyles, Props } from './MainStyle';
import image from '../../../images/background.jpg';
import logo from '../../../images/spaceLandLogo.png';

const Main: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={classes.container}>
        <img src={logo} alt="space-land-logo" />
        {children}
      </div>
    </div>
  );
};

export default Main;
