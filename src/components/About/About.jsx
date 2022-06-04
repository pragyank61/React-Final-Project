import { Button, Grid, Typography } from "@material-ui/core";

import React from "react";
import myImg from "../../assets/my-pic.jpg";
import useStyles from "./style";
const About = () => {
  const classes = useStyles();
  return (
    <section id='#about' className={classes.about}>
      <Grid justify='center' className={classes.container} container>
        <Grid xs={10} md={4} item>
          <Typography className={classes.title} variant='h3'>
            ABOUT US
          </Typography>
          <img className={classes.myImg} src={myImg} alt='my-photo' />
        </Grid>
        <Grid xs={10} md={5} className={classes.aboutText} item>
          <Typography class={classes.myName}>
            Temples in Nepal
          </Typography>
          <Typography class={classes.myInfo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi odio nam deleniti iste cum esse deserunt placeat sapiente eum sit?
          </Typography>

          <Button
            variant='outlined'
            color='primary'
            className={classes.aboutBtn}
          >
            Continue
          </Button>
        </Grid>
        <Grid xs={0} md={1} item></Grid>
        
      </Grid>
    </section>
  );
};

export default About;
