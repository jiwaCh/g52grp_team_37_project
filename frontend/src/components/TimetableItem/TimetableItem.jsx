import React from 'react';
import proptypes from 'prop-types';
import { ListItem, ListItemAvatar, Avatar, ListItemText, makeStyles } from '@material-ui/core';
import cx from 'classnames';
import useStyles from './TimetableItem.styles';

/**
 * Timetable Item component
 *
 * Component for line itmes in the timetable component
 *
 * @param {{ busLine: string | number, time: string, destination: string, alternate: boolean, color: string}} props component props
 * @returns TimetableItem component
 */
const TimetableItem = ({ busLine, time, destination, alternate, color }) => {
  const classes = useStyles();
  const customClass = makeStyles(theme => ({
    lineColor: {
      color: theme.palette.getContrastText(color),
      backgroundColor: color,
    },
  }))();
  return (
    <ListItem dense={true} className={cx({ [classes.alternate]: alternate })}>
      <ListItemAvatar>
        <Avatar className={customClass.lineColor}>{busLine}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={destination} secondary={time} />
    </ListItem>
  );
};

TimetableItem.propTypes = {
  busLine: proptypes.oneOfType([proptypes.string, proptypes.number]).isRequired,
  time: proptypes.string.isRequired,
  destination: proptypes.string.isRequired,
  alternate: proptypes.bool.isRequired,
  color: proptypes.string.isRequired,
};

export default TimetableItem;
