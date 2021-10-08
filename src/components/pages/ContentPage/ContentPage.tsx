import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Typography, Grid, Button } from '@material-ui/core';
import Header from '../../common/Header/Header';
import Main from '../../common/Main/Main';
import LaunchItem from '../../common/LaunchItem/LaunchItem';
import {
  getSelectedLaunch,
  setLaunch,
} from '../../../redux/actions/launchesActions';
import { useStyles } from './ContentPageStyle';

const ContentPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedLaunch = useSelector(getSelectedLaunch);
  const [isRedirect, setIsRedirect] = useState<boolean>(false);
  window.scroll(0, 0);

  const selectItemHandling = () => {
    setTimeout(() => {
      setIsRedirect(true);
      dispatch(setLaunch(null));
    }, 500);
  };

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header isContent={true} />
      <Main>
        <Grid container justifyContent="center" style={{ width: '100%' }}>
          <Grid item xs={12} sm={12} md={12} className={classes.root}>
            <div className={classes.center}>
              {selectedLaunch !== null ? (
                <LaunchItem launch={selectedLaunch} isContent={true} />
              ) : (
                <Typography>Nothing to show</Typography>
              )}
            </div>
            <div className={classes.center}>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={selectItemHandling}
              >
                Back
              </Button>
            </div>
          </Grid>
        </Grid>
      </Main>
    </div>
  );
};

export default ContentPage;
