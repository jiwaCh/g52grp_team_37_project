import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  const alternateColor = '#efefef';
  return {
    alternate: {
      color: theme.palette.getContrastText(alternateColor),
      backgroundColor: alternateColor,
    },
  };
});

export default useStyles;
