import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './App.css';
import red from'./red.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  
const Confirmation=()=>
{
    return(
      <div style={{ backgroundImage: `url(${red})` }}>
      
    
      
        <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <Item className="color">
        <h1 style= {{ color: 'black'}}> Provide Details </h1> <br></br>
        
        </Item>
        <Item> 
          
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" /><br></br>
          <br></br><br></br>
          <TextField id="filled-basic" label="Enter Address" variant="filled" /><br></br>
          <br></br><br></br>
          <TextField id="standard-basic" label="Contact" variant="standard" /><br></br>
          <br></br><br></br>
          <Link to='/final'>
          <Button  className = "btnColor" variant="contained"> Submit </Button><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </Link>
                   
          </Item>
          
        </Grid>
        </Grid>
        </div>


        
 );


}


export default Confirmation ;
