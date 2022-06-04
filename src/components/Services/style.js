import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  services: {
    padding: "2rem 0rem 2rem 0rem"
  },
  serviceText: {
    padding: "0rem 0rem 2rem 0rem",
    fontSize: "2.5rem",
    fontWeight: "500",
  },
  cardPara: {
    letterSpacing: 1,
  },
  cardImg: {
    height: "100px",
    width: "1px",
  },
}));

export default useStyles;
