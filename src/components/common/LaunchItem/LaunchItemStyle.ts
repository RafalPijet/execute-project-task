import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Launch } from '../../../globalTypes';
import { secondaryColor } from '../../../globalStyles';

export const useStyles = makeStyles(() => createStyles({
    root: {
        margin: 5,
        padding: 30,
        borderRadius: 25,
        background: "linear-gradient(180deg, rgba(255,255,255,.2) 0%, rgba(255,255,255,.1) 61%, rgba(255,255,255,0) 100%)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    settingHeight: {
        height: 500
    },
    imageBox: {
        border: `2px solid ${secondaryColor}`,
        borderRadius: 25,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        "@media (min-width: 320px)": {
            minWidth: 250,
            minHeight: 200,
        },
        "@media (min-width: 768px)": {
            minHeight: 300,
        },
        "@media (min-width: 992px)": {
            minHeight: 200,
        },
        "@media (min-width: 1200px)": {
            minHeight: 200,
            minWidth: 300
        },
    },
    date: {
        color: 'rgba(255, 255, 255, .5)',
        width: '100%',
        margin: '15px 0 5px 0',
        fontSize: 10,
    },
    name: {
        width: '100%',
        color: secondaryColor,
    },
    description: {
        color: 'rgba(255, 255, 255, .7)',
        fontSize: 14
    },
    rowCenter: {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center'
    },
    columnBetween: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    button: {
        color: secondaryColor,
        borderColor: secondaryColor,
        borderRadius: 25
    }
}))

export interface Props {
    launch: Launch;
    isContent: boolean;
}