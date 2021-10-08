import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../common/Header/Header';
import Main from '../../common/Main/Main';
import LaunchesList from '../../features/LaunchesList/LaunchesList';
import { getLaunches } from '../../../redux/actions/launchesActions';
import { getLaunchesRequest } from '../../../redux/thunks';
import { useStyles } from './MainPageStyle';

const MainPage: React.FC = () => {
  const classes = useStyles();
  const launches = useSelector(getLaunches);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(6);

  useEffect(() => {
    if (!launches.length) {
      dispatch(getLaunchesRequest(page));
    }
  }, []);

  return (
    <div>
      <Header isContent={false} />
      <Main>
        <LaunchesList />
      </Main>
    </div>
  );
};

export default MainPage;
