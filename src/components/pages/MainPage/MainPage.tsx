import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../common/Header/Header';
import Main from '../../common/Main/Main';
import LaunchesList from '../../features/LaunchesList/LaunchesList';
import { getLaunchesRequest } from '../../../redux/thunks';
import { useStyles } from './MainPageStyle';

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(6);

  useEffect(() => {
    dispatch(getLaunchesRequest(page));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <LaunchesList />
      </Main>
    </div>
  );
};

export default MainPage;
