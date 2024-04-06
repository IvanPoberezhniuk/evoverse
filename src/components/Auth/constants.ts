import { Yup } from "@/shared/helpers";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
const signinSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  username: Yup.string().required().min(3).max(20),
  referalCode: Yup.string().optional(),
  termAndConditions: Yup.boolean()
    .required()
    .oneOf([true], "Value must be true"),
  oldEnough: Yup.boolean().required().oneOf([true], "Value must be true"),
});

export { loginSchema, signinSchema };
