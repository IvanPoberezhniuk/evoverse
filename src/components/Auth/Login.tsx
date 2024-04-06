import { useFormik } from 'formik';

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import { loginSchema } from './constants';

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
}

export default function Login() {
  const {
    isValid,
    values,
    dirty,
    errors,
    touched,
    setTouched,
    setFieldValue,
    handleBlur,
    handleChange,
  } = useFormik<ILoginFormValues>({
    initialValues: { email: "", password: "" },
    onSubmit: () => {},
    enableReinitialize: true,
    validateOnMount: true,
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
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <FormGroup sx={styles.checkbox.container}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="2FA Code"
          />
        </FormGroup>
        <TextField />
        <Button>LOGIN</Button>
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
