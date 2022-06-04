import { makeStyles } from "@material-ui/core/styles";

import landingBg from "../../assets/bg.jpg";

const useStyles = makeStyles((theme) => ({
  landing: {
    marginTop: "-11vh",
    height: "101vh",
    background: `-webkit-linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,0.8)), url(${landingBg}) no-repeat center`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  gridItem: {
    padding: "5px 0",
  },
  gridText: {
    fontFamily: "Opens Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8rem",
    },
  },
  name: {
    color: theme.palette.common.white,
    fontFamily: "Open Sans",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  landingBtn: {
    fontFamily: "Open Sans",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.blue,
      border: `1px solid ${theme.palette.common.blue}`,
    },
  },
}));

export default useStyles;
