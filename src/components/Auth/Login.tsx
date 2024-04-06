import { useFormik } from "formik";

import {
  Box,
  Button,
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
    handleSubmit,
  } = useFormik<ILoginFormValues>({
    initialValues: { email: "", password: "", use2fa: false, code2fa: "" },
    onSubmit: (values) => {
      alert(JSON.stringify({ isValid, ...values }, null, 2));
    },
    validateOnChange: true,
    validationSchema: loginSchema,
  });

  return (
    <Box sx={styles.container}>
      <Stack>
        <Typography variant="h4">WELCOME BACK</Typography>
        <Typography variant="body2">
          We've saved your seat at the winning table.
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
        <Button onClick={handleSubmit}>LOGIN</Button>
        <Typography variant="body2" textAlign="center">
          or login with wallet
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Using Ledger?" />
        </FormGroup>
        <Button color="secondary">SOLONA WALLET</Button>
        <Button color="secondary">Metamask</Button>
      </Stack>
    </Box>
  );
}
