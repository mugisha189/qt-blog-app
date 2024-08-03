/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../components/core/button";
import { useUser } from "../../hooks/useUser";
import { useModal } from "../../hooks/useModal";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { signup } = useUser();
  const { closeModal } = useModal();

  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const validate = (values: SignUpFormValues) => {
    const errors: Partial<SignUpFormValues> = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long and include upper and lower case letters, numbers, and special characters";
    }
    return errors;
  };

  const onSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);
    await signup(values, closeModal);
    setSubmitting(false);
  };

  return (
    <div className="w-full text-black p-6 bg-white">
      <div className="mb-5">
        <p className="text-3xl font-extrabold text-primary">Sign Up</p>
        <p className="text-xs text-left text-gray-700">
          Welcome! Please enter your details to create an account. If you
          encounter any issues, feel free to reach out to our support team. Your
          privacy and security are our top priorities.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="my-3">
              <label htmlFor="name" className="w-full text-sm mb-2">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="px-4 py-2 bg-inherit border-myBlue w-full border outline-none text-sm rounded-2xl focus:border-primary transition-colors duration-300 focus:border-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-xs text-red-500"
              />
            </div>
            <div className="my-3">
              <label htmlFor="email" className="w-full text-sm mb-2">
                Email
              </label>
              <Field
                type="text"
                name="email"
                className="px-4 py-2 bg-inherit border-myBlue w-full border outline-none text-sm rounded-2xl focus:border-primary transition-colors duration-300 focus:border-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-xs text-red-500"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="w-full text-sm mb-2">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="px-4 py-2 bg-inherit border-myBlue w-full border outline-none text-sm rounded-2xl focus:border-primary transition-colors duration-300 focus:border-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-red-500"
              />
            </div>
            <div className="flex justify-end mt-5">
              <Button variant="primary" type="submit" loading={isSubmitting}>
                <p className="px-10">Register</p>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
