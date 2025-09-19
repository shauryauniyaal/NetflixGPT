export const checkValidData = (email, password, name) => {
  const errorList = [];
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/.test(
      password
    );

  if (!isEmailValid) {
    errorList.push("Email is not valid.");
  }
  if (!isPasswordValid) {
    errorList.push("Password is not valid.");
  }
  if (!isNameValid) {
    errorList.push("Name is not valid.");
  }

  return errorList;
};
