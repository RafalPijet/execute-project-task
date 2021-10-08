import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Launch } from '../../../globalTypes';

export const useStyles = makeStyles(() => createStyles({
    description: {
        paddingLeft: 10,
        fontFamily: 'Roboto',
        fontSize: 16,
    }
}))

export interface Props {
    launch: Launch;
    isFavorites: boolean;
}