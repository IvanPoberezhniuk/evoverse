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

import { loginSchema } from "./constants";

const styles = {
  container: { width: "100%", maxWidth: 380 },
  checkbox: {
    container: {
      alignItems: "flex-start",
    },
  },
};

interface ILoginFormValues {
  email: string;
  password: string;
  use2fa: boolean;
  code2fa: string;
}

export default function Login() {
  const {
    isValid,
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    submitForm,
  } = useFormik<ILoginFormValues>({
    initialValues: { email: "", password: "", use2fa: false, code2fa: "" },
    onSubmit: (values) => {
      alert(JSON.stringify({ isValid, ...values }, null, 2));
    },
    validationSchema: loginSchema,
  });

  const { handleLogIn } = useMetaMask();

  return (
    <Box sx={styles.container}>
      <Stack component="form">
        <Typography variant="h3" textAlign="center">
          WELCOME BACK
        </Typography>
        <Typography variant="body2" textAlign="center">
          We&apos;ve saved your seat at the winning table.
        </Typography>
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
        <FormGroup sx={styles.checkbox.container}>
          <FormControlLabel
            control={<Checkbox />}
            label="2FA Code"
            checked={values.use2fa}
            onChange={() => setFieldValue("use2fa", !values.use2fa)}
          />
        </FormGroup>
        <Collapse in={values.use2fa}>
          <TextField
            id="code2fa"
            label="Code"
            onChange={handleChange}
            value={values.code2fa}
          />
        </Collapse>
        <ButtonWithSound onClick={submitForm}>LOGIN</ButtonWithSound>
        <Typography variant="body2" textAlign="center">
          or login with wallet
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Using Ledger?" />
        </FormGroup>
        <ButtonWithSound color="secondary">SOLONA WALLET</ButtonWithSound>
        <ButtonWithSound
          color="secondary"
          onClick={() => {
            handleLogIn();
          }}
        >
          Metamask
        </ButtonWithSound>
      </Stack>
    </Box>
  );
}
