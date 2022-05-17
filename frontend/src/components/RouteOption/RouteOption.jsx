import React from 'react';
import proptypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOn';
import cx from 'classnames';
import useStyles from './RouteOptions.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as NavigationActions } from '../../store/navigation';
import RouteLegChip from '../RouteLegChip/RouteLegChip';
import { push } from 'connected-react-router';

const RouteOption = ({ details, alternate }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { origin, destination } = useSelector(state => state.navigation);

  const select = route => () => {
    dispatch(NavigationActions.setRoute(route));
    dispatch(push('/navigation/navigate'));
  };

  return (
    <ListItem button className={cx({ [classes.alternate]: alternate })} onClick={select(details)}>
      <ListItemIcon>
        <LocationIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <>
            <b>{origin.structured_formatting.main_text}</b> to <b>{destination.structured_formatting.main_text}</b> in{' '}
            <b>{details.duration / 60}</b> minutes
          </>
        }
        secondary={
          <span className={classes.chipRoot}>
            {details.steps.map((props, i) => (
              <RouteLegChip {...props} key={i} />
            ))}
          </span>
        }
      />
    </ListItem>
  );
};

RouteOption.propTypes = {
  alternate: proptypes.bool.isRequired,
  details: proptypes.shape({
    duration: proptypes.number.isRequired,
    steps: proptypes.arrayOf(
      proptypes.shape({
        mode: proptypes.oneOf(['WALK', 'BUS', 'BICYCLE']).isRequired,
        depart: proptypes.string.isRequired,
        arrive: proptypes.string.isRequired,
        duration: proptypes.number.isRequired,
        line: proptypes.string,
        color: proptypes.string,
      }),
    ),
  }).isRequired,
};

export default RouteOption;
