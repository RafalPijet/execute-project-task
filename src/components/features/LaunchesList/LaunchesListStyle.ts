import { makeStyles, createStyles } from '@material-ui/core/styles';
import { secondaryColor } from '../../../globalStyles'

export const useStyles = makeStyles(() => createStyles({
    root: {
        marginTop: 100,
        justifyContent: 'center'
    },
    spiner: {
        color: secondaryColor
    }
}))