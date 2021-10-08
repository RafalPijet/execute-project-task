import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useLocation } from 'react-router-dom';
import { MenuItem, Avatar, Typography } from '@mui/material';
import { setLaunch } from '../../../redux/actions/launchesActions';
import emptyImage from '../../../images/noImage.png';
import { Props, useStyles } from './SelectMenuItemStyle';

const SelectMenuItem: React.FC<Props> = (props) => {
  const { launch, isFavorites } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isRedirect, setIsRedirect] = useState<boolean>(false);

  const selectItemHandling = () => {
    dispatch(setLaunch(props.launch));
    if (location.pathname === '/') {
      setTimeout(() => setIsRedirect(true), 500);
    }
  };

  if (isRedirect) {
    return <Redirect to="/content" />;
  }

  return (
    <MenuItem
      onClick={selectItemHandling}
      style={{ width: '100%', justifyContent: 'flex-start', margin: '5px 0' }}
    >
      <Avatar
        src={
          launch.images[0].image !== undefined
            ? launch.images[0].image
            : emptyImage
        }
        alt={launch.images[0].name}
        variant="rounded"
      />
      <Typography className={classes.description}>{launch.name}</Typography>
    </MenuItem>
  );
};

export default SelectMenuItem;
