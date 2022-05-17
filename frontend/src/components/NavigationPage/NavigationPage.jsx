import React from 'react';
import { Typography, FormGroup, Button } from '@material-ui/core';
import Container from '../Container';
import GoogleMapsAutocomplete from '../GoogleMapsAutocomplete';
import useStyles from './NavigationPage.styles';
import { Actions as NavigationActions, Thunks as NavigationThunks } from '../../store/navigation';
import { useDispatch, useSelector } from 'react-redux';

const BusStopsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { origin, destination } = useSelector(state => state.navigation);

  const setOrigin = origin => dispatch(NavigationActions.setOrigin(origin));
  const setDestination = destination => dispatch(NavigationActions.setDestination(destination));
  const search = () => dispatch(NavigationThunks.search(origin, destination));

  return (
    <>
      <Container>
        <Typography component="h1" variant="h4">
          Get Directions
        </Typography>
        <Typography component="h2" variant="body1" gutterBottom={true}>
          Enter an origin and destination.
        </Typography>
        <FormGroup className={classes.formRoot}>
          <br />

          <GoogleMapsAutocomplete onChange={setOrigin} label="Origin" />
          <br />
          <GoogleMapsAutocomplete onChange={setDestination} label="Destination" />
          <br />
          <Button color="primary" variant="contained" onClick={search} disabled={!origin || !destination}>
            Search
          </Button>
        </FormGroup>
      </Container>
    </>
  );
};

BusStopsPage.propTypes = {};

export default BusStopsPage;
