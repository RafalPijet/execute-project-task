import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { Paper, Typography, Grid, Button } from '@material-ui/core';
import { cutText } from '../../../functions';
import { setLaunch } from '../../../redux/actions/launchesActions';
import { useStyles, Props } from './LaunchItemStyle';

const LaunchItem: React.FC<Props> = (props) => {
  const { name, date, images, description } = props.launch;
  const { isContent, launch } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const dateFormat = new Date(date).toLocaleString();
  const [isRedirect, setIsRedirect] = useState<boolean>(false);

  const selectItemHandling = () => {
    dispatch(setLaunch(launch));
    setTimeout(() => setIsRedirect(true), 500);
  };

  if (isRedirect) {
    return <Redirect to="/content" />;
  }

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Paper className={classes.root} elevation={0}>
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={12} sm={12} md={12} className={classes.columnBetween}>
            <div>
              <div
                className={classes.imageBox}
                style={{
                  backgroundImage: `url(${images[0].image})`,
                }}
              ></div>
              <Typography align="left" className={classes.date}>
                {dateFormat.substring(0, 10)}
              </Typography>
              <Typography align="left" className={classes.name}>
                {name}
              </Typography>
              <Typography align="left" className={classes.description}>
                {isContent ? description : cutText(description, 400)}
              </Typography>
            </div>
            {!isContent && (
              <div className={classes.rowCenter}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={selectItemHandling}
                >
                  Read more
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LaunchItem;
