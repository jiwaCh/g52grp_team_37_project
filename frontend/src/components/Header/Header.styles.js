import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  toolbarSection: {
    display: 'flex',
    alignItems: 'center',
  },
  drawer: {
    width: '65vw',
  },
}));

export default useStyles;
