import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BusIcon from '@material-ui/icons/DirectionsBus';
import MapIcon from '@material-ui/icons/Map';
import Drawer from '@material-ui/core/Drawer';
import { List, Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../../store/navigationDrawer';
import { NavLink } from 'react-router-dom';
import useStyles from './Header.styles';
import Image from 'material-ui-image';
import nccLogo from '../../assets/ncc-logo.jpg';
import DebugDataToggle from '../DebugDataToggle';

const Header = () => {
  const { open } = useSelector(state => state.navigationDrawer);
  const dispatch = useDispatch();
  const toggle = () => dispatch(Actions.toggle());
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <ToolBar className={classes.toolbar}>
          <span className={classes.toolbarSection}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Group 37 Transport</Typography>
          </span>
          <span className={classes.toolbarSection}>
            <DebugDataToggle className={classes.debugToggle} />
          </span>
        </ToolBar>
      </AppBar>
      <Drawer open={open} onClose={toggle} className={classes.drawer}>
        <List>
          <Image src={nccLogo} aspectRatio={1511 / 720} animationDuration={0} />
          <ListItem button component={NavLink} to="/" key="Home" className={classes.drawer} onClick={toggle}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/busStops"
            key="Bus Stops"
            className={classes.drawer}
            onClick={toggle}
          >
            <ListItemIcon>
              <BusIcon />
            </ListItemIcon>
            <ListItemText primary="Bus Stops" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/navigation"
            key="Directions"
            className={classes.drawer}
            onClick={toggle}
          >
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Directions" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
