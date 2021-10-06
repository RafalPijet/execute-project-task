import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display: "flex",
        position: "fixed",
        zIndex: 1100
    }
}))