"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup"; // Import Yup for form validation
import axios from "axios";
import Toast from "../Toast";
import { useFormik } from "formik";

const LoginForm = () => {
  const [toastState, setToastState] = useState(null);
  const router = useRouter();
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  // Define onSubmit function to handle form submission
  const onSubmit = async (values: any) => {
    
    try {
      const signInResponse = await axios.post("/api/auth/login", values);
      if (signInResponse?.data?.status) {
        setToastState({
          message: "Hi! welcome back",
          isSuccess: true,
        });
        setTimeout(() => {
          setToastState(null);
          router.push("/profile");
        }, 1000);
      } else {
        setToastState({
          message: signInResponse?.data?.message,
          isSuccess: false,
        });
        setTimeout(() => {
          setToastState(null);
        }, 500);
      }
    } catch (err) {}
  };

  // Initialize useFormik hook with form configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  console.log(formik.values, formik.errors)

  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Your password"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => formik.handleSubmit()}
      >
        Login
      </button>
      <div className="text-blue-500 cursor-pointer my-2">
        <Link href="/auth/signup">Signup</Link>
      </div>
    </div>
  );
};
export default LoginForm;
