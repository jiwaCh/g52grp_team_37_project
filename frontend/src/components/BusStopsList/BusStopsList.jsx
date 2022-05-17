import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Thunks as BusStopsActions } from '../../store/busStops';
import useStyles from './BusStopsList.styles';
import { List, ListItem, ListItemText, LinearProgress } from '@material-ui/core';
import BusStopsListItem from '../BusStopsListItem';

const BusStopsList = () => {
  const { busStops, loading } = useSelector(state => state.busStops);
  const dispatch = useDispatch();

  if (!loading && busStops.length <= 0) {
    dispatch(BusStopsActions.fetchBusStops());
  }

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {loading && (
        <>
          <LinearProgress color="primary" />
          <ListItem>
            <ListItemText>Loading</ListItemText>
          </ListItem>
        </>
      )}
      {!loading &&
        busStops.map(({ name, id, buses }, i) => (
          <BusStopsListItem name={name} id={id} key={id} alternate={!(i % 2)} buses={buses} />
        ))}
    </List>
  );
};

export default BusStopsList;
