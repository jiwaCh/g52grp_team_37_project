import React from 'react';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Actions as DebugActions } from '../../store/debugToggle';

const DebugDataToggle = () => {
  const { checked } = useSelector(state => state.debugToggle);
  const dispatch = useDispatch();

  const onChange = () => dispatch(DebugActions.toggle());

  return (
    <FormGroup>
      <FormControlLabel control={<Switch size="small" />} label="Debug" checked={checked} onChange={onChange} />
    </FormGroup>
  );
};

export default DebugDataToggle;
