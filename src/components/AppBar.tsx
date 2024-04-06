"use client";
import { useState } from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AuthDialog from "./Auth/AuthDialog";

const styles = {
  container: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "primary.dark",
  },
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
        <Toolbar>
          <Typography
            color="#fff"
            variant="h1"
            component="h3"
            sx={styles.title}
          >
            Ivan Poberezhniuk
          </Typography>
          <Button
            sx={styles.btn}
            variant="outlined"
            onClick={() => handleOpen(0)}
          >
            Login
          </Button>
          <Button
            sx={styles.btn}
            variant="outlined"
            onClick={() => handleOpen(1)}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <AuthDialog open={open} setOpen={setOpen} tabIndex={tabIndex} />
    </Box>
  );
}
