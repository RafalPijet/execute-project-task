import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Grid } from '@material-ui/core';
import Header from '../../common/Header/Header';
import Main from '../../common/Main/Main';
import LaunchesList from '../../features/LaunchesList/LaunchesList';
import {
  getPending,
  resetRequest,
} from '../../../redux/actions/requestActions';
import { getLaunchesRequest } from '../../../redux/thunks';
import { useStyles } from './MainPageStyle';

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPending = useSelector(getPending);
  const [page, setPage] = useState<number>(6);

  useEffect(() => {
    dispatch(resetRequest());
    dispatch(getLaunchesRequest(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const selectPageHandling = (value: number) => {
    if (value !== page) {
      setPage(value);
      window.scroll(0, 0);
    }
  };

  return (
    <div>
      <Header isContent={false} />
      <Main>
        <LaunchesList />
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '30px 0',
            }}
          >
            <IconButton
              onClick={() => selectPageHandling(6)}
              className={page === 6 ? classes.buttonSelected : classes.button}
              disabled={isPending}
            >
              01
            </IconButton>
            <IconButton
              onClick={() => selectPageHandling(7)}
              className={page === 7 ? classes.buttonSelected : classes.button}
              disabled={isPending}
            >
              02
            </IconButton>
          </Grid>
        </Grid>
      </Main>
    </div>
  );
};

export default MainPage;
