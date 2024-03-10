"use client";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for form validation
import Link from "next/link";

const SignupForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    fullName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  // Define onSubmit function to handle form submission
  const onSubmit = (values:any) => {
    console.log(values); // You can handle form submission here
  };

  // Initialize useFormik hook with form configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  {console.log(formik.values,formik.errors)}
  return (
    <form className="max-w-sm mx-auto">
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
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
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
          required
        />
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={()=>formik.handleSubmit()}
      
      >
        Signup now
      </button>
      <div className="text-blue-500 cursor-pointer my-2">
        <Link href="/auth/login">Login</Link>
      </div>
    </form>
  );
};
export default SignupForm;
