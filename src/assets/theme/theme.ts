import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'DINNextRoundedLTW01-Regular', sans-serif"
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3A10E5"
    },
    secondary: {
      main: "#F61414"
    },
    success: {
      main: "#2AB930"
    },
    info: {
      main: "#0F85F1"
    },
    text: {
      primary: "#4C4859"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          fontWeight: "700",
          "&.Mui-disabled": {
            background: "#fff",
            border: "2px solid #C4C4C4",
            color: "#C4C4C4"
          }
        },
        outlined: {
          border: "2px solid #3A10E5",
          "&:hover": {
            border: "2px solid #3A10E5",
            background: "#3A10E5",
            color: "#fff"
          }
        },
        contained: {
          "&:hover": {
            background: "rgba(58, 16, 229, 0.9)"
          }
        }
      }
    }
  }
});
