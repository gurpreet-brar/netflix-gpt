export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!email || !password || name === "") {
    return "❌ All fields are required";
  }

  if (name) {
    const isNameValid = /^[A-Z][a-zA-z ]{1,29}$/.test(name);
    if (!isNameValid) return "❌ Name is not valid ";
  }

  if (!isEmailValid) return "❌ Email ID is not valid ";
  if (!isPassValid) return "❌ Password is not valid";

  return null;
};
