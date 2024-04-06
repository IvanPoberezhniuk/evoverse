"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import Login from "./Login";
import Signin from "./Signin";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function LoginPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ mt: 8 }}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface IAuth {
  tabIndex: number;
}

const styles = {
  container: {
    width: "100%",
    maxWidth: 380,
    background: "#fff",
    p: 4,
  },
  tab: {
    container: { borderBottom: 1, borderColor: "divider" },
  },
};

export default function Auth({ tabIndex }: IAuth) {
  const [value, setValue] = React.useState(tabIndex);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.container}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        aria-label="Login Signin"
        sx={styles.tab.container}
      >
        <Tab label="LOGIN" {...a11yProps(0)} />
        <Tab label="REGISTER" {...a11yProps(1)} />
      </Tabs>
      <LoginPanel value={value} index={0}>
        <Login />
      </LoginPanel>
      <LoginPanel value={value} index={1}>
        <Signin />
      </LoginPanel>
    </Box>
  );
}
