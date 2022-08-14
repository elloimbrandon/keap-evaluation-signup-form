const emailValidator = require("email-validator");

const onlyLetters = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

const inputHandler = (event, setStateFunction) => {
  setStateFunction(event.target.value);
};

const handleSubmitButtonColor = (bool, setStateFunction) => {
  setStateFunction(bool);
};

const checkEmailFormat = (
  emailName,
  setStateFunction,
  setFailStateFunction
) => {
  if (
    emailName === "email@example.com" ||
    emailValidator.validate(emailName) === false
  ) {
    setFailStateFunction(false);
    setStateFunction(false);
  }
};

const checkInputNameFormat = (name, setStateFunction, setFailStateFunction) => {
  if (name.length <= 0 || onlyLetters(name) === false) {
    setFailStateFunction(false);
    setStateFunction(false);
  }
};

export {
  inputHandler,
  handleSubmitButtonColor,
  checkEmailFormat,
  checkInputNameFormat,
};
