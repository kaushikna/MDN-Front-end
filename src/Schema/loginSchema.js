import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean().required("Please accept the terms"),
});

const initialLoginValue = {
  email: "",
  password: "",
  rememberMe: false,
};

export { loginSchema, initialLoginValue };