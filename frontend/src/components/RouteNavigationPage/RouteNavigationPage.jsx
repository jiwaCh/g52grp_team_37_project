import React from 'react';
import Container from '../Container';
import { Typography, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import RouteNavigationItem from '../RouteNavigationItem';
import { push } from 'connected-react-router';

const RouteNavigationPage = () => {
  const { route, origin, destination } = useSelector(state => state.navigation);
  const dispatch = useDispatch();

  if (!route || !origin || !destination) {
    dispatch(push('/navigation'));
  }

  return (
    (!!route || !!origin || !!destination) && (
      <>
        <Container>
          <Typography component="h1" variant="h5">
            Navigate
          </Typography>
          <Typography component="h2" variant="body1" gutterBottom={true}>
            <b>{origin.structured_formatting.main_text}</b> to <b>{destination.structured_formatting.main_text}</b> in{' '}
            <b>{route.duration / 60}</b> minutes
          </Typography>
        </Container>
        <List>
          {route.steps.map((step, i) => (
            <RouteNavigationItem {...step} alternate={!(i % 2)} key={i} />
          ))}
        </List>
      </>
    )
  );
};

export default RouteNavigationPage;
