export const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!email || !password || name === "") {
    return "❌ All fields are required";
  }

  if (name !== null) {
    const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(name);
    if (!isNameValid) return "❌ Name is not valid ";
  }

  if (!isEmailValid) return "❌ Email ID is not valid ";
  if (!isPassValid) return "❌ Password is not valid";

  return null;
};
