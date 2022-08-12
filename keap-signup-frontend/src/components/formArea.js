import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Validator } from "email-validator";
import profanityFinder from "profanity-finder";

// const profanityfinder = require("profanity-finder");

const findprofanity = profanityFinder.findprofanity;

const emailValidator = require("email-validator");

const FormArea = () => {
  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Error check state variables
  const [firstNameCheck, setFirstNameCheck] = useState(true);
  const [lastNameCheck, setLastNameCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setFirstNameCheck(true);
    setLastNameCheck(true);
    setEmailCheck(true);
    setInputError(false);
  }, []);

  // regex check to allow only letters no special characters or numbers
  const onlyLetters = (str) => {
    return /^[a-zA-Z]+$/.test(str);
  };

  // keep an eye on ToSting array method. Could effect rest of program

  const preCheckInputs = () => {
    if (
      firstName.length <= 0 ||
      onlyLetters(firstName) === false ||
      findprofanity(toString(firstName)) === true
    ) {
      setFirstNameCheck(false);
      setInputError(true);
      //   setInputError(true);
    }
    if (
      lastName.length <= 0 ||
      onlyLetters(lastName) === false ||
      findprofanity(toString(lastName)) === true
    ) {
      setLastNameCheck(false);
      setInputError(true);
    }
    if (emailValidator.validate(email) === false) {
      setEmailCheck(false);
      setInputError(true);
    }
    return;
  };

  const checkFirstNameFormat = () => {
    if (
      firstName.length <= 0 ||
      onlyLetters(firstName) === false ||
      findprofanity(toString(firstName)) === true
    ) {
      setFirstNameCheck(false);
      return false;
    }
  };

  const checkLastNameFormat = () => {
    if (
      lastName.length <= 0 ||
      onlyLetters(lastName) === false ||
      findprofanity(toString(lastName)) === true
    ) {
      setLastNameCheck(false);
      return false;
    }
  };

  const checkEmailFormat = () => {
    // console.log(emailValidator.validate(email));
    if (emailValidator.validate(email) === false) {
      setEmailCheck(false);
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // preCheckInputs();

    // setInputError(false);
    // setEmailCheck(true);
    // setFirstNameCheck(true);
    // setLastNameCheck(true);

    //   this is working below!
    // if (checkEmailFormat() === false) {
    //   return;
    // }
    if (checkEmailFormat() === false) {
      return;
    }
    setEmail("");
    setEmailCheck(true);

    //
    // if (checkEmailFormat(email) === false) return;
    // const url = "https://keap.com/api/project/leads";
    // axios
    //   .post(url, {
    //     first_name: firstName,
    //     last_name: lastName,
    //     email_address: email,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // setEmail({ ...email, [event.target.email_address]: email });
  };

  // Create another form component for errors

  return (
    <div className="flex flex-col w-[96%] items-center -translate-y-11 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col items-center pl-1 pt-4">
        <form onSubmit={handleSubmit}>
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            First name
          </p>
          {firstNameCheck === true ? (
            <input
              className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-2 caret-Green
              outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={handleFirstName}
              value={firstName}
              autoComplete="off"
            />
          ) : (
            <>
              <input
                className="font-open-sans w-80 border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red
              xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={handleFirstName}
                value={firstName}
                autoComplete="off"
              />
              <p className="font-open-sans text-Red mb-3 xsm:text-mobile-errors sm:text-mobile-errors">
                Last name required
              </p>
            </>
          )}
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            Last name
          </p>
          {lastNameCheck === true ? (
            <input
              className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-3 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={handleLastName}
              value={lastName}
              autoComplete="off"
            />
          ) : (
            <>
              <input
                className="font-open-sans w-80 border-2 border-Red rounded-md p-3 mb-3 caret-Green outline-Red xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
                type="text"
                name="last_name"
                placeholder="Last name"
                onChange={handleLastName}
                value={lastName}
                autoComplete="off"
              />
              <p className="font-open-sans text-Red mb-3 xsm:text-mobile-errors sm:text-mobile-errors">
                Last name required
              </p>
            </>
          )}
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            Email
          </p>
          {emailCheck === true ? (
            <input
              className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-3 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
              type="text"
              name="email_address"
              placeholder="Email address"
              onChange={handleEmail}
              value={email}
              autoComplete="off"
            />
          ) : (
            <>
              <input
                className="font-open-sans w-80 border-2 border-Red rounded-md p-3 mb-3 caret-Green  outline-Red xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
                type="text"
                name="email_address"
                placeholder="Email address"
                onChange={handleEmail}
                value={email}
                autoComplete="off"
              />
              <p className="font-open-sans text-Red mb-3 xsm:text-mobile-errors sm:text-mobile-errors">
                Email does not match format <br /> "someone@email.com"
              </p>
            </>
          )}
          <input
            className="container flex justify-center h-14 font-roboto text-white rounded-3xl bg-Green cursor-pointer hover:bg-white hover:text-Black hover:border-2 hover:border-black sm:text-mobile-buttons"
            type="submit"
          />
        </form>
        <p className="container flex text-Grey mt-3 mb-4 sm:text-mobile-legal">
          By clicking submit you agree to our
          <mark className="text-Green bg-transparent">
            &nbsp;Terms and Service
          </mark>
        </p>
      </div>
    </div>
  );
};

export default FormArea;
