import React from 'react';
import proptypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Thunks as TimetableActions } from '../../store/timetable';
import { List } from '@material-ui/core';
import TimetableItem from '../TimetableItem/TimetableItem';
import useStyles from './Timetable.styles';

/**
 * Timetable component
 *
 * @param {{id: string}} props props.id is the bus stop id
 * @returns Timetable Component
 */
const Timetable = ({ id }) => {
  const { timetable, loading, busStopId, retrievedAt } = useSelector(state => state.timetable);
  const dispatch = useDispatch();

  const expiration = new Date(Date.now() - 60 * 1000);

  if (!loading && (busStopId !== id || retrievedAt < expiration)) {
    dispatch(TimetableActions.fetchTimetable(id));
  }

  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {loading && 'Loading...'}
        {!loading &&
          timetable.map((entry, i) => (
            <TimetableItem
              key={entry.busId}
              busLine={entry.busLine}
              destination={entry.destination}
              time={entry.arrivalTime}
              color={entry.color}
              alternate={i % 2}
            />
          ))}
      </List>
      <div className={classes.fixedBottom} />
    </>
  );
};

Timetable.propTypes = {
  id: proptypes.string.isRequired,
};

export default Timetable;
