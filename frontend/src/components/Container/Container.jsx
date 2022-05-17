import React from 'react';
import PropTypes from 'prop-types';
import MUContainer from '@material-ui/core/Container';
import useStyles from './Container.styles';

const Container = ({ children }) => {
  const classes = useStyles();

  return <MUContainer className={classes.root}>{children}</MUContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Container;
