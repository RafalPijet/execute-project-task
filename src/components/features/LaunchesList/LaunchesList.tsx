import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import LaunchItem from '../../common/LaunchItem/LaunchItem';
import { getLaunches } from '../../../redux/actions/launchesActions';
import { getPending } from '../../../redux/actions/requestActions';
import { Launch } from '../../../globalTypes';
import { useStyles } from './LaunchesListStyle';

const LaunchesList: React.FC = () => {
  const classes = useStyles();
  const isPending = useSelector(getPending);
  const launches = useSelector(getLaunches);

  return (
    <Grid container className={classes.root}>
      {!isPending ? (
        launches.map((item: Launch) => {
          return <LaunchItem key={item.id} launch={item} isContent={false} />;
        })
      ) : (
        <CircularProgress className={classes.spiner} />
      )}
    </Grid>
  );
};

export default LaunchesList;
