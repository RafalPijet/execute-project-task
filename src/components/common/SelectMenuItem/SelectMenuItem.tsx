import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useLocation } from 'react-router-dom';
import { MenuItem, Avatar, Typography, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import {
  setLaunch,
  getSelectedLaunch,
} from '../../../redux/actions/launchesActions';
import { removeLaunchFromFavorites } from '../../../redux/thunks';
import emptyImage from '../../../images/noImage.png';
import { Props, useStyles } from './SelectMenuItemStyle';

const SelectMenuItem: React.FC<Props> = (props) => {
  const { launch, isFavorites } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedLaunch = useSelector(getSelectedLaunch);
  const [isRedirect, setIsRedirect] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const rootClasses = classNames({
    [classes.root]: true,
    [classes.rootFavorites]: isFavorites,
  });

  const avatarClasses = classNames({
    [classes.avatar]: isFavorites,
  });

  useEffect(() => {
    if (
      isFavorites &&
      selectedLaunch !== null &&
      location.pathname === '/content'
    ) {
      setIsHidden(selectedLaunch.id !== launch.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLaunch]);

  const selectItemHandling = () => {
    dispatch(setLaunch(props.launch));
    if (location.pathname === '/') {
      setTimeout(() => setIsRedirect(true), 500);
    }
  };

  const removeLaunchHandling = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    dispatch(removeLaunchFromFavorites(launch.id));
  };

  if (isRedirect) {
    return <Redirect to="/content" />;
  }

  return (
    <MenuItem
      onClick={selectItemHandling}
      className={rootClasses}
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={() => {
        if (selectedLaunch !== null && selectedLaunch.id !== launch.id) {
          setIsHidden(true);
        }
        if (location.pathname === '/') {
          setIsHidden(true);
        }
      }}
    >
      {isFavorites && (
        <div hidden={isHidden} className={classes.hiddenContent}></div>
      )}

      <div className={classes.verticalCenter}>
        <Avatar
          src={
            launch.images[0].image !== undefined
              ? launch.images[0].image
              : emptyImage
          }
          alt={launch.images[0].name}
          variant="rounded"
          className={avatarClasses}
        />

        <Typography className={classes.description}>{launch.name}</Typography>
      </div>

      {isFavorites && location.pathname === '/content' && (
        <IconButton onClick={removeLaunchHandling} style={{ marginRight: 10 }}>
          <DeleteForever />
        </IconButton>
      )}
    </MenuItem>
  );
};

export default SelectMenuItem;
