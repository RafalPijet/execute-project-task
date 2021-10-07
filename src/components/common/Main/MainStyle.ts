import { ReactNode } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: "2000px",
        maxHeight: "2000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.2)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
}))

export interface Props {
    children: ReactNode;
}