import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { getError, resetRequest } from '../../../redux/actions/requestActions';
import { useStyles, Props } from './MainStyle';
import image from '../../../images/background.jpg';
import logo from '../../../images/spaceLandLogo.png';

const Main: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (error.isError) {
      if (error.message.includes('FAVORITES')) {
        enqueueSnackbar(error.message, { variant: 'info' });
      } else {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    }
    dispatch(resetRequest());
  }, [error.isError]);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={classes.container}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={12} className={classes.logoBox}>
            <img src={logo} alt="space-land-logo" />
          </Grid>
        </Grid>
        {children}
      </div>
    </div>
  );
};

export default Main;
