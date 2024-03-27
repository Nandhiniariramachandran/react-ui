import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
  
const BookingPage = () => {
    return (
<header>
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
    <Grid container spacing={2}>

    <Grid item xs={4}>
      <Item> 
      <img src={car1} alt ="car1.jpg" style= {{width: '97%'}}></img>
      <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Selling Price ( $30,920 to $42,495)" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Approx Delivery Date (2-3days)" />
      </ListItem>
      <ListItem button divider>
      <Link to='/confirmation'>
      <Button  className = "btnColor" variant="contained">BUY</Button></Link>   
      </ListItem>
            <Divider light />
      </List>
      </Item>
    </Grid>
    
    
    <Grid item xs={4}>
      <Item>
      <img src={car2} alt ="car2.jpg" style= {{width: '100%'}}></img>
      <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Selling Price($30,920 to $42,495)" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Approx Delivery Date (2-3days)" />
      </ListItem>
      <ListItem button divider>
      <Link to='/confirmation'>
      <Button className = "btnColor" variant="contained">BUY</Button></Link>
      </ListItem>
      <Divider light />
      
    </List>
      </Item>
    </Grid>
    <Grid item xs={4}>
    <Item>
    <img src={car2} alt ="car2.jpg" style= {{width: '100%',height: '20%'}}></img>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="Selling Price($30,920 to $42,495)" />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Approx Delivery Date (2-3days)" />
    </ListItem>
    <ListItem button divider>
    <Link to='/confirmation'>
    <Button className = "btnColor" variant="contained">BUY</Button></Link>
    </ListItem>
    <Divider light />
    
  </List>
    </Item>
  </Grid>  
    </Grid>
</header>
    
    )
   
    
  };

export default BookingPage;
