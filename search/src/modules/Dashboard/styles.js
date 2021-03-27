import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '95%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '80%',
        },
    },
    container: {
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 72px)',
        paddingTop: 32,
        justifyContent: 'center',
    },
    itemContainer: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    }
}));

export default useStyles;
