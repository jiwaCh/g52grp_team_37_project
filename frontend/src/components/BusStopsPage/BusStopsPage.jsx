import React from 'react';
import { Typography } from '@material-ui/core';
import BusStopsList from '../BusStopsList';
import Container from '../Container';

const BusStopsPage = () => {
  return (
    <>
      <Container>
        <Typography component="h1" variant="h4">
          Bus Stops
        </Typography>
        <Typography component="h2" variant="body1">
          Select a bus stop from the list below to see it&apos;s current timetable.
        </Typography>
      </Container>
      <BusStopsList />
    </>
  );
};

BusStopsPage.propTypes = {};

export default BusStopsPage;
