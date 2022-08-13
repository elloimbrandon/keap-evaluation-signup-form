import "../App.css";
// Not really using useEffect as im not making a get req
// import { useState, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// Finds profanity in given string or array
import profanityFinder from "profanity-finder";
const findprofanity = profanityFinder.findprofanity;
// Validates email format is correct
const emailValidator = require("email-validator");

// Regex check to allow only letters no special characters or numbers
const onlyLetters = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

// Sign up form area
const FormArea = () => {
  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Error check state variables
  const [firstNameCheck, setFirstNameCheck] = useState(true);
  const [lastNameCheck, setLastNameCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [signedUp, setSignedUp] = useState(false);

  // Renders updated state when state changes
  //   useEffect(() => {
  //     setFirstName(firstName);
  //     setLastName(lastName);
  //     setEmail(email);
  //     setFirstNameCheck(firstNameCheck);
  //     setLastNameCheck(lastNameCheck);
  //     setEmailCheck(emailCheck);
  //   }, []);

  // Setting state variables with text from form inputs
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const checkFirstNameFormat = () => {
    if (onlyLetters(firstName) === false || findprofanity(firstName) === true)
      setFirstNameCheck(false);
  };

  const checkLastNameFormat = () => {
    if (
      lastName.length <= 0 ||
      onlyLetters(lastName) === false ||
      findprofanity(lastName) === true
    )
      setLastNameCheck(false);
  };

  const checkEmailFormat = () => {
    if (
      email === "email@example.com" ||
      emailValidator.validate(email) === false ||
      findprofanity(email) === true
    )
      setEmailCheck(false);
  };

  // Resets state after success
  const resetState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setFirstNameCheck(true);
    setLastNameCheck(true);
    setEmailCheck(true);
  };

  // Post request to keap api
  const getResponse = async () => {
    const url = "https://keap.com/api/project/leads";
    try {
      await axios
        .post(url, {
          first_name: firstName,
          last_name: lastName,
          email_address: email,
        })
        .then((response) => {
          //   console.log(response.data.success);
          if (response.data.success === true) {
            setSignedUp(true);
            resetState();
          }
        });
    } catch (err) {
      checkEmailFormat();
      if (err.response.data.errors[0] === "First name is required.") {
        checkFirstNameFormat();
        checkLastNameFormat();
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirstNameCheck(true);
    setLastNameCheck(true);
    setEmailCheck(true);
    getResponse();

    // if (checkEmailFormat() == false) {
    //   //   setEmail("");
    //   return;
    // } else if (checkLastNameFormat() == false) {
    //   return;
    // }
  };

  // Create another form component for errors

  return (
    <div className="flex flex-col w-[96%] items-center -translate-y-11 bg-white rounded-2xl shadow-lg">
      {signedUp === true ? (
        <div>Success!</div>
      ) : (
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
                  First name required
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
      )}
    </div>
  );
};

export default FormArea;

// *** graveyard ***

// if (
//   checkEmailFormat() !== true &&
//   checkFirstNameFormat() !== true &&
//   checkLastNameFormat() !== true
// ) {
//   return;
// }

// } else if (
//       firstNameCheck === true &&
//       lastNameCheck === true &&
//       emailCheck === true
//     ) {
//       console.log("YES WE DID IT!!!");
//     }
//   const [inputError, setInputError] = useState(null);
//   this is working below!
// if (checkEmailFormat() === false) {
//   return;
// }
//   setEmail("");
// setEmailCheck(true);

//   const preCheckInputs = () => {
//     if (
//       firstName.length <= 0 ||
//       onlyLetters(firstName) === false ||
//       findprofanity(toString(firstName)) === true
//     ) {
//       setFirstNameCheck(false);
//       setInputError(true);
//       //   setInputError(true);
//     }
//     if (
//       lastName.length <= 0 ||
//       onlyLetters(lastName) === false ||
//       findprofanity(toString(lastName)) === true
//     ) {
//       setLastNameCheck(false);
//       setInputError(true);
//     }
//     if (emailValidator.validate(email) === false) {
//       setEmailCheck(false);
//       setInputError(true);
//     }
//     return;
//   };

// preCheckInputs();

// setInputError(false);
// setEmailCheck(true);
// setFirstNameCheck(true);
// setLastNameCheck(true);
