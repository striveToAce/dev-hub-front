"use client";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for form validation
import FormErrorText from "./FormErrorText";

const FeedForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .trim()
      .max(100, "Maximum 100 chars allowed")
      .required("Required"),
    description: Yup.string()
      .trim()
      .max(500, "Maximum 500 chars allowed")
      .required("Required"),
    promoted: Yup.bool().required("Required"),
  });

  // Define onSubmit function to handle form submission
  const onSubmit = async (values: any) => {
    console.log("__hello___");
    const signUpResponse = await axios.post("/api/feed/addUpdate", values);
    console.log(signUpResponse);
  };

  // Initialize useFormik hook with form configuration
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      promoted: false,
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className="flex justify-center">
      <div className="w-11/12 sm:w-5/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <div className="font-semibold text-xl mb-2">DevHub Article</div>
        <div className="mb-3">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            placeholder="Article title"
          />
          <FormErrorText
            touched={formik?.touched?.title}
            error={formik?.errors?.title}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="Article description"
          ></textarea>
          <FormErrorText
            touched={formik?.touched?.description}
            error={formik?.errors?.description}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => formik.handleSubmit()}
        >
          Add article
        </button>
      </div>
    </div>
  );
};
export default FeedForm;
