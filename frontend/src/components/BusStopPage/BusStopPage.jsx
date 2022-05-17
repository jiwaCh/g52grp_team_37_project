import React from 'react';
import Timetable from '../Timetable/Timetable';
import { Typography } from '@material-ui/core';
import Container from '../Container';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Thunks as BusStopActions } from '../../store/busStop';
import BusStopMap from '../BusStopMap/BusStopMap';

const BusStopPage = () => {
  const { stop } = useSelector(state => state.router.location.query);
  const { loading, name, lat, lng, busStopId } = useSelector(state => state.busStop);
  const dispatch = useDispatch();

  if (!stop) {
    dispatch(push('/home'));
  }

  if (!loading && busStopId !== stop) {
    dispatch(BusStopActions.fetchBusStop(stop));
  }

  return (
    <>
      {loading && <Typography>Loading</Typography>}
      {!loading && (
        <>
          <Container>
            <Typography component="h1" variant="h4">
              {name}
            </Typography>
          </Container>
          <BusStopMap lat={lat} lng={lng}>
            <Timetable id={stop} />
          </BusStopMap>
        </>
      )}
    </>
  );
};

export default BusStopPage;
