import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    width: "100%",
    minHeight: "10vh",
    color: theme.palette.common.white,
  },
  logo: {
    height: "4rem",
  },
  copyright: {
    fontFamily: "Open Sans",
    textAlign: "center",
  },
  gridItem: {
    margin: "15px auto",
  },

  socialIcon: {
    "&:hover": {
      color: theme.palette.common.blue,
      cursor: "pointer",
    },
  },
}));

export default useStyles;
