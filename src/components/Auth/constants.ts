import { Yup } from "@/shared/helpers";

const loginSchema = Yup.object().shape({
  email: Yup.string().trim().email().required(),
  password: Yup.string().trim().required(),
  use2fa: Yup.boolean(),
  code2fa: Yup.string().trim(),
});

const signinSchema = Yup.object().shape({
  email: Yup.string().trim().email().required(),
  password: Yup.string()
    .trim()
    .required()
    .min(8)
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  name: Yup.string().trim().required().min(3).max(20),
  refCode: Yup.string().trim().optional(),
  termsAndConditions: Yup.boolean()
    .oneOf([true], "Value must be true")
    .required(),
  oldEnough: Yup.boolean().oneOf([true], "Value must be true").required(),
});

export { loginSchema, signinSchema };
