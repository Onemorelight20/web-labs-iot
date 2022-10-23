import * as Yup from "yup";
import { getEmailsOrEmptyList } from "../localStorageUtills";

const required = "This field is required";

export const validationCheckoutObject = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characrets long")
    .max(14, "First name must be 14 characrets or less")
    .required(required),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characrets long")
    .max(14, "Last name must be 14 characrets or less")
    .required(required),
  email: Yup.string()
    .email("Email address is invalid")
    .required(required),
  phoneNumber: Yup.string()
    .trim()
    .matches(
      /\d{10}/,
      "Number should contain 10 numbers, for example: 0955952422"
    )
    .required(required),
  address: Yup.string().required(required),
  createdOn: Yup.date().default(() => new Date()),
});

export const validationLoginObject = Yup.object({
  email: Yup.string()
    .email("Email address is invalid")
    .required(required),
  password: Yup.string()
    .min(6, "The password should contain at least 6 characrets.")
    .max(15, "The password should contain at most 15 characters.")
    .required(required),
});

export const validationSignupObject = Yup.object({
  username: Yup.string()
    .min(2, "The username should contain at least 2 characters.")
    .max(13, "The username should contain at most 15 characters.")
    .required(required),
  email: Yup.string()
    .notOneOf(getEmailsOrEmptyList(), "User with such email already exists")
    .email("Email address is invalid")
    .required(required),
  password: Yup.string()
    .min(6, "The password should contain at least 6 characrets.")
    .max(15, "The password should contain at most 15 characters.")
    .required(required),
  passwordConfirmation: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});
