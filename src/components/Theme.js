import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#08d9d6";
const black = "#252a34";
const red = "#ff2e63";
const white = "#eaeaea";

export default createMuiTheme({
  palette: {
    common: {
      blue: blue,
      black: black,
      red: red,
      white: white,
    },
    primary: {
      main: black,
    },
    secondary: {
      main: white,
    },
  },
});
