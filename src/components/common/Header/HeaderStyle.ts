import { makeStyles, createStyles } from '@material-ui/core/styles';
import { container, primaryColor, secondaryColor, disabledColor } from '../../../globalStyles';

export const useStyles = makeStyles(() => createStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display: "flex",
        position: "fixed",
        zIndex: 1100
    },
    content: {
        ...container,
    },
    inputDescription: {
        position: 'absolute',
        top: '2px',
        textTransform: 'uppercase',
        fontSize: '10px',
        fontWeight: 600,
    },
    searchButton: {
        backgroundColor: primaryColor,
        margin: '10px 0',
        '&:hover': {
            backgroundColor: primaryColor
        }
    },
    selectedSearchButton: {
        backgroundColor: secondaryColor,
        '&:hover': {
            backgroundColor: secondaryColor
        }
    },
    addIcon: {
        color: '#000',
        transform: 'Rotate(45deg)'
    },
    searchIcon: {
        color: '#fff'
    },
    favoritesButtonBox: {
        position: 'relative',
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    favoritesButton: {
        zIndex: 1,
        '& .MuiIconButton-label': {
            transition: '0.3s'
        },
        backgroundColor: secondaryColor,
        '&:hover': {
            backgroundColor: '#fff',
            '& .MuiIconButton-label': {
                transform: 'Rotate(360deg)',
                transition: '0.3s'
            }
        },
    },
    favoritesButtonSelected: {
        backgroundColor: '#fff'
    },
    favoritesContentClose: {
        borderRadius: '50%',
        transform: 'scale(0)',
    },
    favoritesContentOpen: {
        transform: 'scale(1)',
        borderRadius: 'unset',
    },
    favoritesContent: {
        transitionProperty: 'all',
        transition: '.3s',
        transformOrigin: '45% 5%',
        position: 'absolute',
        right: '-15vw',
        top: 0,
        width: '30vw',
        height: '100vh',
        backgroundColor: secondaryColor,
    },
    disabled: {
        backgroundColor: `${disabledColor} !important`
    },
    addButton: {
        backgroundColor: secondaryColor,
        marginRight: 10,
        '&:hover': {
            backgroundColor: '#fff'
        }
    }
}))

export interface Props {
    isContent: boolean;
}