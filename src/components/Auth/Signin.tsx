import { useFormik } from "formik";

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
}

export default function Signin() {
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
  } = useFormik<ISigninFormValues>({
    initialValues: { email: "", password: "" },
    onSubmit: () => {},
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: signinSchema,
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
        <TextField label="Username" type="name" />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Refferal code? (Optional)"
          />
          <TextField label="Refferal code" type="text" />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I have read and agree to the Terms And Condotions"
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            componentsProps={{
              typography: {
                fontSize: "12px",
              },
            }}
            label="I confirm gambling isn't forbidden by my local authorities and I'm at least 18 years old."
          />
        </FormGroup>
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
