import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyThemeContext} from './contexts/MyThemeContext'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';


export default function NavBar() {
    const { theme } = useContext(MyThemeContext);
  
    return (
      <AppBar position="static" style={{ backgroundColor: theme.background, color: theme.foreground }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            TechGuruHub
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
            <Button color="inherit" component={NavLink} to="/BitCoinRates">
              BitCoinRates
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }