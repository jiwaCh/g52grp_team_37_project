import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  const alternateColor = '#efefef';
  return {
    alternate: {
      color: theme.palette.getContrastText(alternateColor),
      backgroundColor: alternateColor,
    },
    chipRoot: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  };
});

export default useStyles;
