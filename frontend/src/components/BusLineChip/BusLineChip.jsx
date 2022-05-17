import React from 'react';
import proptypes from 'prop-types';
import { Chip, makeStyles } from '@material-ui/core';
import BusIcon from '@material-ui/icons/DirectionsBus';
import TramIcon from '@material-ui/icons/Tram';
import TrainIcon from '@material-ui/icons/Train';

const BusLineChip = ({ busLine, color, type }) => {
  const customClass = makeStyles(theme => ({
    chip: {
      backgroundColor: color,
      color: theme.palette.getContrastText(color),
    },
    icon: {
      color: theme.palette.getContrastText(color),
    },
  }))();

  const icon = type => {
    switch (type) {
      case 'BUS': {
        return <BusIcon className={customClass.icon} />;
      }

      case 'TRAM': {
        return <TramIcon className={customClass.icon} />;
      }

      case 'TRAIN': {
        return <TrainIcon className={customClass.icon} />;
      }

      default: {
        return <BusIcon className={customClass.icon} />;
      }
    }
  };

  return <Chip size="small" label={busLine} className={customClass.chip} icon={icon(type)} />;
};

BusLineChip.propTypes = {
  busLine: proptypes.oneOfType([proptypes.string, proptypes.number]).isRequired,
  color: proptypes.string.isRequired,
  type: proptypes.oneOf(['BUS', 'TRAM', 'TRAIN']),
};

export default BusLineChip;
