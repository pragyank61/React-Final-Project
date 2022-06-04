import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    padding: "2rem 0rem 2rem 0rem",
    backgroundColor: "rgb(230, 230, 230)",
  },
  
  title: {
    padding: "1rem 0rem 1rem 0rem",
    fontWeight: 500,
    fontSize: "2.5rem",
    
  },
  aboutText: {
    paddingTop: "180px",
    
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
    },
  },
  aboutBtn: {
    margin: "30px 0",
    
  },
  myImg: {
    height: "30rem",
    width: "auto",
    borderRadius: "5px",
    
    // [theme.breakpoints.down("xs")]: {
    //   height: "200px",
    //   paddingLeft: "0",
    // },
    // [theme.breakpoints.down("md")]: {
    //   paddingLeft: "0",
    // },
  },
  myName: {
    fontSize: "1.5rem",
    fontWeight: 700,
    
    
  },
  myInfo: {
    
    letterSpacing: 1,
  },
}));

export default useStyles;
