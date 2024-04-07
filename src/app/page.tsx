"use client";
import { useEffect } from "react";

import { makeServer } from "@/mirage";
import theme from "@/shared/theme";
import { Box, ThemeProvider } from "@mui/material";

import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    makeServer({ environment: "development" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box component="main" className={styles.main}></Box>
    </ThemeProvider>
  );
}
