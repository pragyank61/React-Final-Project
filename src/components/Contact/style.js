import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "2rem 0rem 5rem 0rem",
    backgroundColor: "rgb(230, 230, 230)",
  },
  contactText: {
    padding: "1rem 0rem 2rem 0rem",
    fontSize: "2.5rem",
    fontWeight: "500",
  },
  textField: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: "40%",
  },
  textFieldfull: {
    marginTop: theme.spacing(2),
    width: "83%",
  },
  btn: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
