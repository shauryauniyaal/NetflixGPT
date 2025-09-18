export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/.test(
      password
    );

  if (!isEmailValid && !isPasswordValid) {
    return ["Email is not valid.", "Password is not valid."];
  } else {
    if (!isEmailValid) {
      return ["Email is not valid."];
    }
    if (!isPasswordValid) {
      return ["Password is not valid."];
    }
  }
};
