import { useState } from "react";

import { useFormik } from "formik";

import ButtonWithSound from "@/shared/components/ButtonWithSound";
import useMetaMask from "@/shared/hooks/web3";
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { signinSchema } from "./constants";

const styles = {
  container: { width: "100%", maxWidth: 380 },
  checkbox: {
    container: {
      alignItems: "flex-start",
    },
  },
};

interface ISigninFormValues {
  email: string;
  password: string;
  name: string;
  useRefCode: boolean;
  refCode?: string;
  termsAndConditions: boolean;
  oldEnough: boolean;
}

export default function Signin() {
  const {
    isValid,
    values,
    errors,
    touched,
    submitCount,
    submitForm,
    setFieldValue,
    handleChange,
  } = useFormik<ISigninFormValues>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      useRefCode: false,
      refCode: "",
      termsAndConditions: false,
      oldEnough: false,
    },
    initialErrors: {
      termsAndConditions: "",
      oldEnough: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify({ isValid, ...values }, null, 2));
    },
    validationSchema: signinSchema,
  });

  const [metamaskSignUp, setmetamaskSignUp] = useState(false);
  const { accounts, handleSignUp } = useMetaMask();

  const signUp = (): void => {
    if (metamaskSignUp) {
      const hasErros =
        !errors.name && !errors.termsAndConditions && !errors.oldEnough;
      hasErros && values.name && handleSignUp({ name: values.name });
      submitForm();
      return;
    }

    submitForm();
  };

  return (
    <Box sx={styles.container}>
      <Stack component="form">
        <Typography variant="h3" textAlign="center">
          CREATE AN ACCOUNT
        </Typography>
        <Typography variant="body2" textAlign="center">
          Join the thrill, the casino where anything is possible!
        </Typography>
        {!metamaskSignUp && (
          <>
            <TextField
              id="email"
              label="Email"
              type="email"
              onChange={handleChange}
              value={values.email}
              helperText={touched.email && errors.email}
              error={Boolean(Boolean(touched.email && errors.email))}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={handleChange}
              value={values.password}
              helperText={touched.password && errors.password}
              error={Boolean(Boolean(touched.password && errors.password))}
            />
          </>
        )}
        <TextField
          id="name"
          label="Username"
          type="text"
          onChange={handleChange}
          value={values.name}
          helperText={touched.name && errors.name}
          error={Boolean(Boolean(touched.name && errors.name))}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Refferal code? (Optional)"
            checked={values.useRefCode}
            onChange={() => setFieldValue("useRefCode", !values.useRefCode)}
          />
          <Collapse in={values.useRefCode}>
            <TextField
              id="refCode"
              label="Refferal code"
              type="text"
              onChange={handleChange}
              value={values.refCode}
              helperText={touched.refCode && errors.refCode}
              error={Boolean(Boolean(touched.refCode && errors.refCode))}
            />
          </Collapse>
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I have read and agree to the Terms And Conditions"
            checked={values.termsAndConditions}
            componentsProps={{
              typography: {
                fontSize: "12px",
                color: submitCount && errors.termsAndConditions ? "red" : "",
              },
            }}
            onChange={() =>
              setFieldValue("termsAndConditions", !values.termsAndConditions)
            }
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            componentsProps={{
              typography: {
                fontSize: "12px",
                color: submitCount && errors.oldEnough ? "red" : "",
              },
            }}
            label="I confirm gambling isn't forbidden by my local authorities and I'm at least 18 years old."
            checked={values.oldEnough}
            onChange={() => setFieldValue("oldEnough", !values.oldEnough)}
          />
        </FormGroup>
        <ButtonWithSound onClick={signUp}>
          {metamaskSignUp ? "CONNECT WALLET" : "REGISTER"}
        </ButtonWithSound>
        <Typography variant="body2" textAlign="center">
          or login with wallet
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Using Ledger?" />
        </FormGroup>
        <ButtonWithSound color="secondary">SOLONA WALLET</ButtonWithSound>
        <ButtonWithSound
          color="secondary"
          onClick={() => setmetamaskSignUp(true)}
        >
          Metamask
        </ButtonWithSound>
      </Stack>
    </Box>
  );
}
