import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BgGif from "../assets/BgGif.webp"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '110%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
    textAlign:"center",
    margin:"5%",
    color:"white",
    textTransform:"upperCase",
    
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
       <img className='HomeImg'
          src={BgGif}
          height="110%"
          width="100%" />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography style={{fontFamily:"cursive", textAlign: "center",margin:"10%"}} variant="h3" component="h1" className={classes.title}>
          <strong style={{color:"#A365F5"}}> Football </strong> and happiness go hand in hand  <strong style={{color:"#A365F5"}}>  playing </strong> 
          </Typography>
          <a style={{textDecoration:"none"}} target="_blank" href="https://www.fifa.com/">
          <Button style={{marginTop:"-10%",backgroundColor:"#5D20D9"}}  color="primary" variant="contained">
           BUY FOOTBALLS!
          </Button>
          </a>
        </Box>
      </div>
    </section>
  );
};

export default Hero