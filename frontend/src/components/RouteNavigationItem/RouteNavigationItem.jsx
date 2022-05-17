import React from 'react';
import proptypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, makeStyles } from '@material-ui/core';
// import BusIcon from '@material-ui/icons/DirectionsBus';
import WalkIcon from '@material-ui/icons/DirectionsWalk';
import BikeIcon from '@material-ui/icons/DirectionsBike';
import cx from 'classnames';
import useStyles from './RouteNavigationItem.styles';

const RouteNavigationItem = ({ mode, depart, arrive, duration, line, color, alternate }) => {
  const classes = useStyles();

  const customClass = makeStyles(theme => {
    const customColor = color || theme.palette.secondary.main;
    return {
      lineColor: {
        color: theme.palette.getContrastText(customColor),
        backgroundColor: customColor,
      },
    };
  })();

  return (
    <ListItem className={cx({ [classes.alternate]: alternate })}>
      {(mode === 'BICYCLE' || mode === 'WALK') && (
        <ListItemIcon>
          {mode === 'WALK' && <WalkIcon />}
          {mode === 'BICYCLE' && <BikeIcon />}
        </ListItemIcon>
      )}
      {mode === 'BUS' && (
        <ListItemAvatar>
          <Avatar className={customClass.lineColor}>{line}</Avatar>
        </ListItemAvatar>
      )}
      <ListItemText
        primary={
          <>
            {mode === 'WALK' && <>Walk from </>}
            {mode === 'BICYCLE' && <>Cycle from </>}
            {mode === 'BUS' && <>Take bus line {line} from </>}
            <b>{depart}</b> to <b>{arrive}</b>.
          </>
        }
        secondary={<>{duration / 60} minutes</>}
      />
    </ListItem>
  );
};

RouteNavigationItem.propTypes = {
  alternate: proptypes.bool.isRequired,
  mode: proptypes.oneOf(['WALK', 'BUS', 'BICYCLE']).isRequired,
  depart: proptypes.string.isRequired,
  arrive: proptypes.string.isRequired,
  duration: proptypes.number.isRequired,
  line: proptypes.string,
  color: proptypes.string,
};

export default RouteNavigationItem;
