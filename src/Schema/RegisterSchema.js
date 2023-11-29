import * as Yup from "yup";

const initialRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  contactNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  userName: Yup.string().required("Username is required"),
});

const initialRegisterValue = {
  email: "",
  password: "",
  contactNumber: "",
  firstName: "",
  lastName: "",
  userName: "",
};

export { initialRegisterValue, initialRegisterSchema };