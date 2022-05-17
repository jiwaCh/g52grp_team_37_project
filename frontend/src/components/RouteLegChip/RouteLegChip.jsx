import React from 'react';
import proptypes from 'prop-types';
import { Chip, makeStyles } from '@material-ui/core';
import BusIcon from '@material-ui/icons/DirectionsBus';
import WalkIcon from '@material-ui/icons/DirectionsWalk';
import BikeIcon from '@material-ui/icons/DirectionsBike';

const RouteLegChip = ({ mode, duration, color, line }) => {
  const customClass = makeStyles(theme => {
    const chipColor = color || theme.palette.secondary.main;

    return {
      chip: {
        backgroundColor: chipColor,
        color: theme.palette.getContrastText(chipColor),
      },
      icon: {
        color: theme.palette.getContrastText(chipColor),
      },
    };
  })();

  const label = (mode, duration, line) => {
    if (mode === 'WALK' || mode === 'BICYCLE') {
      return `${duration / 60}m`;
    }

    return `${line} | ${duration / 60}m`;
  };

  const icon = mode => {
    switch (mode) {
      case 'BUS': {
        return <BusIcon className={customClass.icon} />;
      }

      case 'WALK': {
        return <WalkIcon className={customClass.icon} />;
      }

      case 'BICYCLE': {
        return <BikeIcon className={customClass.icon} />;
      }

      default: {
        return <BusIcon className={customClass.icon} />;
      }
    }
  };

  return <Chip size="small" label={label(mode, duration, line)} className={customClass.chip} icon={icon(mode)} />;
};

RouteLegChip.propTypes = {
  mode: proptypes.oneOf(['WALK', 'BUS', 'BICYCLE']).isRequired,
  duration: proptypes.number.isRequired,
  line: proptypes.string,
  color: proptypes.string,
};

export default RouteLegChip;
