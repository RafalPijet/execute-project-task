import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Grid, FilledInput, IconButton } from '@material-ui/core';
import {
  Popper,
  Grow,
  Paper,
  MenuList,
  ClickAwayListener,
} from '@mui/material';
import { Search, Add, FavoriteBorder } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import SelectMenuItem from '../SelectMenuItem/SelectMenuItem';
import { getPending } from '../../../redux/actions/requestActions';
import { getLaunches } from '../../../redux/actions/launchesActions';
import { useStyles, Props } from './HeaderStyle';
import { Launch } from '../../../globalTypes';

const Header: React.FC<Props> = (props) => {
  const { isContent } = props;
  const classes = useStyles();
  const isPending = useSelector(getPending);
  const launches = useSelector(getLaunches);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLaunches, setSelectedLaunches] = useState<Launch[]>([]);

  const searchButtonClasses = classNames({
    [classes.searchButton]: true,
    [classes.selectedSearchButton]: isSearch,
    [classes.disabled]: isPending,
  });

  const favoritesButtonClasses = classNames({
    [classes.favoritesButton]: true,
    [classes.favoritesButtonSelected]: isFavoritesOpen,
    [classes.disabled]: isPending,
  });

  const favoritesContentClasses = classNames({
    [classes.favoritesContent]: true,
    [classes.favoritesContentOpen]: isFavoritesOpen,
    [classes.favoritesContentClose]: !isFavoritesOpen,
  });

  useEffect(() => {
    setSelectedLaunches(launches);
  }, [launches]);

  const favoritesButtonHandling = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
    setIsSearch(false);
  };

  const searchButtonHandling = (event: React.MouseEvent<HTMLElement>) => {
    if (!isPending) {
      setAnchorEl(event.currentTarget);
      setIsSearch((previousIsSearch) => !previousIsSearch);
    }
  };

  const searchInputHandling = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined
  ) => {
    if (event !== undefined) {
      let result = launches.filter((item: Launch) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSelectedLaunches(result);
    }
  };

  const canBeOpen = isSearch && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <AppBar className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item xs={12} sm={12} md={3}></Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FilledInput
            disabled={isPending}
            placeholder="enter the model"
            onClick={searchButtonHandling}
            onChange={searchInputHandling}
            fullWidth
            disableUnderline
            style={{
              backgroundColor: '#fff',
              margin: '30px 0',
              borderRadius: '50px',
              fontFamily: 'Roboto',
              fontSize: 14,
            }}
            startAdornment={
              <p className={classes.inputDescription}>search for a ship</p>
            }
            endAdornment={
              <IconButton className={searchButtonClasses} disabled={isPending}>
                {isSearch ? (
                  <Add className={classes.addIcon} />
                ) : (
                  <Search className={classes.searchIcon} />
                )}
              </IconButton>
            }
          />
          {!isPending && selectedLaunches.length > 0 && (
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
                      <MenuList
                        style={{
                          padding: '20px 25px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}
                      >
                        {selectedLaunches.map((item: Launch) => {
                          return (
                            <SelectMenuItem
                              key={item.id}
                              launch={item}
                              isFavorites={false}
                            />
                          );
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          className={classes.favoritesButtonBox}
        >
          {isContent && (
            <IconButton size="small" className={classes.addButton}>
              <Add />
            </IconButton>
          )}
          <IconButton
            className={favoritesButtonClasses}
            onClick={favoritesButtonHandling}
            disabled={isPending}
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
