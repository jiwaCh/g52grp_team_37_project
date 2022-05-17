import React from 'react';
import proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOn';
import cx from 'classnames';
import useStyles from './BusStopsListItem.styles';
import BusLineChip from '../BusLineChip';

const BusStopsListItem = ({ name, id, alternate, buses }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      component={NavLink}
      to={`/busStop?stop=${id}`}
      key={id}
      className={cx({ [classes.alternate]: alternate })}
    >
      <ListItemIcon>
        <LocationIcon />
      </ListItemIcon>
      <ListItemText
        primary={name}
        secondary={
          <span className={classes.chipRoot}>
            {buses.map((busDetails, i) => (
              <BusLineChip {...busDetails} key={busDetails.busLine + i} />
            ))}
          </span>
        }
      />
    </ListItem>
  );
};

BusStopsListItem.propTypes = {
  name: proptypes.string.isRequired,
  id: proptypes.oneOfType([proptypes.string, proptypes.number]).isRequired,
  alternate: proptypes.bool.isRequired,
  buses: proptypes.arrayOf(
    proptypes.shape({
      busLine: proptypes.oneOfType([proptypes.string, proptypes.number]).isRequired,
      color: proptypes.string.isRequired,
    }),
  ).isRequired,
};

export default BusStopsListItem;
