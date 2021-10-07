import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Grid, FilledInput, IconButton } from '@material-ui/core';
import {
  Popper,
  Grow,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
} from '@mui/material';
// import Popper from '@mui/material/Popper';
import { Search, Add, FavoriteBorder } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './HeaderStyle';

const Header: React.FC = () => {
  const classes = useStyles();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const searchButtonClasses = classNames({
    [classes.searchButton]: true,
    [classes.selectedSearchButton]: isSearch,
  });

  const favoritesButtonClasses = classNames({
    [classes.favoritesButton]: true,
    [classes.favoritesButtonSelected]: isFavoritesOpen,
  });

  const favoritesContentClasses = classNames({
    [classes.favoritesContent]: true,
    [classes.favoritesContentOpen]: isFavoritesOpen,
    [classes.favoritesContentClose]: !isFavoritesOpen,
  });

  const favoritesButtonHandling = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
    setIsSearch(false);
  };

  const searchButtonHandling = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsSearch((previousIsSearch) => !previousIsSearch);
  };

  const canBeOpen = isSearch && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <AppBar className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item xs={12} sm={12} md={3}></Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FilledInput
            placeholder="enter the model"
            onClick={searchButtonHandling}
            fullWidth
            disableUnderline
            style={{
              backgroundColor: '#fff',
              margin: '30px 0',
              borderRadius: '50px',
            }}
            startAdornment={
              <p className={classes.inputDescription}>search for a ship</p>
            }
            endAdornment={
              <IconButton className={searchButtonClasses}>
                {isSearch ? (
                  <Add className={classes.addIcon} />
                ) : (
                  <Search className={classes.searchIcon} />
                )}
              </IconButton>
            }
          />
          <Popper
            id={id}
            open={isSearch}
            anchorEl={anchorEl}
            transition
            placement="bottom-start"
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper
                  style={{
                    borderRadius: '25px',
                    marginTop: '10px',
                    width: '100%',
                  }}
                >
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <MenuList>
                      <MenuItem>First Item</MenuItem>
                      <MenuItem>Second Item</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          className={classes.favoritesButtonBox}
        >
          <IconButton
            className={favoritesButtonClasses}
            onClick={favoritesButtonHandling}
          >
            {isFavoritesOpen ? (
              <Add className={classes.addIcon} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
          <div className={favoritesContentClasses}></div>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
