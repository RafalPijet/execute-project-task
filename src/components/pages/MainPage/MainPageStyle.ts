import { makeStyles, createStyles } from '@material-ui/core/styles';
import { container } from '../../../globalStyles'

export const useStyles = makeStyles(() => createStyles({
    container: {
        ...container,
    }
}))