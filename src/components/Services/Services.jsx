import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import cardImg from "../../assets/port.jpg";
const Services = () => {
  const classes = useStyles();
  return (
    <section id='#services' className={classes.services}>
      <Grid container>
        <Grid xs={1} item />
        <Grid item>
          <Typography className={classes.serviceText} variant='h3'>
            LOCATIONS
          </Typography>
        </Grid>
        <Grid xs={1} item />
      </Grid>
      <Grid container>
        <Grid xs={1} item />
        <Grid xs={10} item>
          <Grid spacing={4} container>
            <Grid xs={12} md={4} item>
              <Card variant='outlined'>
                <CardActionArea>
                  <CardMedia
                    classname={classes.cardImg}
                    component='img'
                    image={cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      TEMPLE 1
                    </Typography>
                    <Typography className={classes.cardPara}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos delectus labore non commodi minus ad.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={12} md={4} item>
              <Card variant='outlined'>
                <CardActionArea>
                  <CardMedia
                    classname={classes.cardImg}
                    component='img'
                    image={cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      TEMPLE 2
                    </Typography>
                    <Typography className={classes.cardPara}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, neque praesentium ex ipsam incidunt vitae?
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={12} md={4} item>
              <Card variant='outlined'>
                <CardActionArea>
                  <CardMedia
                    classname={classes.cardImg}
                    component='img'
                    image={cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      TEMPLE 3
                    </Typography>
                    <Typography className={classes.cardPara}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, expedita eaque! Nemo atque dolorum at?
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={1} item />
      </Grid>
    </section>
  );
};

export default Services;
