const FormErrorText = ({ touched = false, error = "" }) => {
  return (
    <>
      {touched && error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
};
export default FormErrorText
