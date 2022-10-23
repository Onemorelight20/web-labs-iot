import * as Yup from "yup";

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
