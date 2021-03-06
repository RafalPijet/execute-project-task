import { makeStyles, createStyles } from '@material-ui/core/styles';
import { secondaryColor } from '../../../globalStyles'

export const useStyles = makeStyles(() => createStyles({
    root: {
        marginTop: 100,
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center'
    },
    spiner: {
        color: secondaryColor
    },
}))