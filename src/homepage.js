import './App.css';
import car from './car.jpg'
import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const HomePage=()=> {
    return (
      <div>
      <header style={{ backgroundImage: `url(${car})` }} className="App-header">
      <Box style={{width:`1390px`}} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Button  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        <Link to='/bookingPage'>
        <Button style= {{ marginTop: '-900px'}} className = "btnColor" variant="contained">Book Now</Button></Link>      </header>
    </div>
    );
  }

export default HomePage;
