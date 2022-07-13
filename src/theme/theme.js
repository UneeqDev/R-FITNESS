import { createTheme } from "@mui/material";

export const theme = createTheme({
  overrides: {
    muiInput: {
      root: {
        outline: "none",
        border: "none",
        "&:focus": {
          outline: "none",
          border: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#010411",
      light: "#010514",
    },
    secondary: {
      main: "#b70101",
    },
  },
});
