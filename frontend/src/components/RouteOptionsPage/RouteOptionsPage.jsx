import React from 'react';
import Container from '../Container';
import { Typography, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import RouteOption from '../RouteOption/RouteOption';
import { push } from 'connected-react-router';

const RouteOptionsPage = () => {
  const { options, loading, origin, destination } = useSelector(state => state.navigation);
  const dispatch = useDispatch();

  console.log(options.length <= 0);

  if (options.length < 1 || !origin || !destination) {
    dispatch(push('/navigation'));
  }

  return (
    (options.length >= 1 || !!origin || !!destination) && (
      <>
        <Container>
          <Typography component="h1" variant="h4">
            Get Directions
          </Typography>
          <Typography component="h2" variant="body1" gutterBottom={true}>
            Select a route option.
          </Typography>
        </Container>
        {!loading && (
          <List>
            {options.map((option, i) => (
              <RouteOption details={option} alternate={!!(i % 2)} key={i} />
            ))}
          </List>
        )}
      </>
    )
  );
};

export default RouteOptionsPage;
