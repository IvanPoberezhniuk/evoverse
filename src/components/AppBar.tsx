"use client";
import { useState } from "react";

import ButtonWithSound from "@/shared/components/ButtonWithSound";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import AuthDialog from "./Auth/AuthDialog";

const styles = {
  container: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "primary.dark",
    p: { xs: 0 },
  },
  toolbar: {},
  btn: {
    height: 40,
    ml: 4,
    color: "#fff",
    px: 4,
    minWidth: 64,
  },
  title: { flexGrow: 1 },
};

export default function HeaderAppBar() {
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const handleOpen = (index: number) => {
    setOpen(true);
    setTabIndex(index);
  };

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.bar}>
        <Toolbar sx={styles.toolbar}>
          <Typography
            color="#fff"
            variant="h1"
            component="h3"
            sx={styles.title}
          >
            Ivan Poberezhniuk
          </Typography>

          <ButtonWithSound
            sx={styles.btn}
            variant="outlined"
            onClick={() => handleOpen(0)}
          >
            Login
          </ButtonWithSound>
          <ButtonWithSound
            sx={styles.btn}
            variant="outlined"
            onClick={() => handleOpen(1)}
          >
            Register
          </ButtonWithSound>
        </Toolbar>
      </AppBar>
      <AuthDialog open={open} setOpen={setOpen} tabIndex={tabIndex} />
    </Box>
  );
}
