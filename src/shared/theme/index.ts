"use client";

import { createTheme } from "@mui/material/styles";

import PALETTE from "./pallete";

let theme = createTheme({
  spacing: 4,
  breakpoints: { values: { xs: 0, sm: 740, md: 900, lg: 1200, xl: 1536 } },
  palette: PALETTE,
});

theme = createTheme(theme, {
  typography: {
    allVariants: theme.unstable_sx({
      color: "secondary.main",
    }),
    h1: {
      fontSize: { xs: "22px", md: "38px" },
    },
    h2: {
      fontSize: { xs: "18px", md: "32px" },
    },
    h3: {
      fontSize: { xs: "18px", md: "24px" },
      marginBottom: "16px",
    },
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "14px",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(", "),
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: theme.unstable_sx({
          flex: 1,
          color: "secondary.main",
          transition: theme.transitions.create(["background-color"], {
            animation: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short,
          }),
        }),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: theme.unstable_sx({
          gap: 6,
          "& .MuiToggleButtonGroup-grouped:not(:last-of-type), .MuiToggleButtonGroup-grouped:not(:first-of-type)":
            {
              fontSize: "18px",
              fontWeight: "500",
              borderRadius: 10,
              border: "1px solid",
              borderColor: "secondary.main",
              textTransform: "none",
              "&:hover": {
                borderColor: "#24ed68",
                backgroundColor: "#24ed68",
              },
              "&.Mui-selected": {
                color: "white.main",
                borderColor: "primary.main",
                backgroundColor: "primary.main",
              },
            },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "sm",
      },
      styleOverrides: {
        root: theme.unstable_sx({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          pt: 6,
          pb: 30,
          px: 4,
        }),
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 6,
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiSlider: {
      styleOverrides: {
        markLabel: theme.unstable_sx({
          color: "secondary.main",
          fontSize: 20,
          '&[data-index="0"]': {
            ml: 4.3,
          },
          '&[data-index="1"]': {
            ml: -6.7,
          },
        }),
        valueLabel: theme.unstable_sx({
          fontSize: 18,
          fontWeight: 500,
          px: 6,
          py: 2,
          color: "primary.main",
          backgroundColor: "secondary.main",
        }),
        rail: theme.unstable_sx({
          opacity: 0.6,
          backgroundColor: "secondary.main",
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          height: 60,
          minWidth: 150,
        },
        outlined: theme.unstable_sx({
          color: "primary.dark",
          borderColor: "primary.dark",
          "&:hover": {
            color: "white",
            backgroundColor: "#24ed68",
          },
        }),
        containedPrimary: theme.unstable_sx({
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#24ed68",
          },
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "secondary",
      },
      styleOverrides: {
        root: theme.unstable_sx({
          fontWeight: 300,
          "&:hover": {
            color: "primary.main",
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: theme.unstable_sx({
          fontWeight: 400,
          color: "secondary.main",
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: theme.unstable_sx({
          gap: 6,
        }),
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        componentsProps: {
          typography: {
            fontSize: "12px",
            fontWeight: 500,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "-1.3rem",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        errorstyle: { position: "absolute", bottom: "-1rem" },
      },
      styleOverrides: {
        root: theme.unstable_sx({
          "& .MuiOutlinedInput-root": {
            fontWeight: "400",
            background: "#fff",
            "&:placeholder": {
              fontSize: 30,
            },
            "&:active": {
              borderWidth: 1,
            },
            "& > fieldset": {
              borderWidth: 2,
            },
            "&:hover > fieldset": {
              borderColor: "primary.main",
            },
          },
          "& .MuiFormHelperText-root": {
            minHeight: 20,
          },
        }),
      },
    },
    MuiSelect: {
      defaultProps: {},
      styleOverrides: {
        root: theme.unstable_sx({
          borderRadius: 0,
          "& fieldset": {
            borderColor: "primary.dark",
          },
        }),
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 2,
        paperprops: {
          square: true,
        },
      },
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: theme.unstable_sx({
          py: 2,
          px: 40,
        }),
      },
    },
  },
});

export default theme;
