import "../App.css";
// Not really using useEffect as im not making a get req
// import { useState, useEffect } from "react";
import React, { useState } from "react";
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
  const [submitFail, setSubmitFail] = useState(true);
  const [signedUp, setSignedUp] = useState(false);
  //   const [submitButtonCol, setSubmitButtonChange] = useState(false);
  const [submitButtonColorOn, setSubmitButtonColorOn] = useState(false);

  // Renders updated state when state changes
  //   useEffect(() => {
  //     setSubmitButtonColorOn(false);
  //     //   setFirstName(firstName);
  //     //   setLastName(lastName);
  //     //   setEmail(email);
  //     //   setFirstNameCheck(firstNameCheck);
  //     //   setLastNameCheck(lastNameCheck);
  //     //   setEmailCheck(emailCheck);
  //   }, [submitButtonColorOn]);

  // Setting state variables with text from form inputs
  const handleFirstName = (event) => {
    // setSubmitButtonChange(true);
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const checkFirstNameFormat = () => {
    if (onlyLetters(firstName) === false || findprofanity(firstName) === true) {
      setSubmitFail(false);
      setFirstNameCheck(false);
    }
  };

  const checkLastNameFormat = () => {
    if (
      lastName.length <= 0 ||
      onlyLetters(lastName) === false ||
      findprofanity(lastName) === true
    ) {
      setSubmitFail(false);
      setLastNameCheck(false);
    }
  };

  const checkEmailFormat = () => {
    if (
      email === "email@example.com" ||
      emailValidator.validate(email) === false ||
      findprofanity(email) === true
    ) {
      setSubmitFail(false);
      setEmailCheck(false);
    }
  };

  //   const checkSubmitFail = () => {
  //     if (
  //       emailCheck === false ||
  //       firstNameCheck === false ||
  //       lastNameCheck === false
  //     )
  //       setSubmitFail(false);
  //   };

  // Resets state after success
  //   const resetState = () => {
  //     setFirstName("");
  //     setLastName("");
  //     setEmail("");
  //     setFirstNameCheck(true);
  //     setLastNameCheck(true);
  //     setEmailCheck(true);
  //   };

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
            // resetState();
          }
        });
    } catch (err) {
      checkEmailFormat();
      if (err.response.data.errors[0] === "First name is required.") {
        //   might be able to just use false logic right here, no need for extra functions
        checkFirstNameFormat();
        checkLastNameFormat();
        // setSubmitButtonColorOn(false);
      }
    }
  };

  //   const handleButtonColor = () => {
  //     setSubmitButtonChange(true);
  //     // setSubmitButtonChange(false);
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    // handleSubmitButtonColorOff();
    setFirstNameCheck(true);
    setLastNameCheck(true);
    setEmailCheck(true);
    setSubmitFail(true);
    // setSubmitButtonColorOn(false);
    getResponse();

    // if (checkEmailFormat() == false) {
    //   //   setEmail("");
    //   return;
    // } else if (checkLastNameFormat() == false) {
    //   return;
    // }
  };

  const handleSubmitButtonColorOn = () => {
    setSubmitButtonColorOn(true);
  };

  const handleSubmitButtonColorOff = () => {
    setSubmitButtonColorOn(false);
  };

  // Create another form component for errors

  return (
    //   dont forget to remove border
    <div className="flex flex-col w-[96%] md:w-[50%] md:h-[590px] md:justify-center items-center sm:-translate-y-11 md:-translate-y-24 bg-white rounded-2xl shadow-lg">
      {signedUp === true ? (
        <div className="flex flex-col w-[96%] h-[414px] items-center justify-center">
          <h2 className="font-roboto sm:text-mobile-h2 md:text-desktop-h2">
            🎉 Thank you! 🎉
          </h2>
          <p className="container flex justify-center text-center font-open-sans w-[320px] md:w-[350px] md:mt-2 sm:text-mobile-body">
            You're well on your way to automating your business!
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:items-center w-[90%] md:w-[80%] md:h-[85%] pt-4 md:pt-2">
          <form onSubmit={handleSubmit} className="flex flex-col md:w-full">
            <p className="font-open-sans pb-2 sm:text-mobile-inputs">
              First name
            </p>
            {firstNameCheck === true ? (
              <input
                className="font-open-sans w-full border border-Grey rounded-md p-3 mb-2 md:mb-9 caret-Green
              outline-Blue sm:text-mobile-inputs sm:text-mobile-inputs"
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={handleFirstName}
                value={firstName}
                autoComplete="off"
                onFocus={handleSubmitButtonColorOn}
                onBlur={handleSubmitButtonColorOff}
              />
            ) : (
              <>
                <input
                  className="font-open-sans w-full border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red
                  sm:text-mobile-inputs sm:text-mobile-inputs"
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={handleFirstName}
                  value={firstName}
                  autoComplete="off"
                  onFocus={handleSubmitButtonColorOn}
                  onBlur={handleSubmitButtonColorOff}
                />
                <p className="font-open-sans text-Red mb-3 md:mb-4 xsm:text-mobile-errors sm:text-mobile-errors">
                  First name required
                </p>
              </>
            )}
            <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs">
              Last name
            </p>
            {lastNameCheck === true ? (
              <input
                className="font-open-sans w-full border border-Grey rounded-md p-3 mb-3 md:mb-9 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
                type="text"
                name="last_name"
                placeholder="Last name"
                onChange={handleLastName}
                value={lastName}
                autoComplete="off"
                onFocus={handleSubmitButtonColorOn}
                onBlur={handleSubmitButtonColorOff}
              />
            ) : (
              <>
                <input
                  className="font-open-sans w-full border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red sm:text-mobile-inputs sm:text-mobile-inputs"
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={handleLastName}
                  value={lastName}
                  autoComplete="off"
                  onFocus={handleSubmitButtonColorOn}
                  onBlur={handleSubmitButtonColorOff}
                />
                <p className="font-open-sans text-Red mb-3 md:mb-4 sm:text-mobile-errors">
                  Last name required
                </p>
              </>
            )}
            <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
              Email
            </p>
            {emailCheck === true ? (
              <input
                className="font-open-sans w-full border border-Grey rounded-md p-3 mb-3 md:mb-7 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
                type="text"
                name="email_address"
                placeholder="Email address"
                onChange={handleEmail}
                value={email}
                autoComplete="off"
                onFocus={handleSubmitButtonColorOn}
                onBlur={handleSubmitButtonColorOff}
              />
            ) : (
              <>
                <input
                  className="font-open-sans w-full border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
                  type="text"
                  name="email_address"
                  placeholder="Email address"
                  onChange={handleEmail}
                  value={email}
                  autoComplete="off"
                  onFocus={handleSubmitButtonColorOn}
                  onBlur={handleSubmitButtonColorOff}
                />
                <p className="font-open-sans text-Red mb-3 xsm:text-mobile-errors sm:text-mobile-errors">
                  Email does not match format <br className="md:hidden" />
                  "someone@email.com"
                </p>
              </>
            )}
            <div className="container flex flex-col md:flex-row">
              {submitButtonColorOn ? (
                <input
                  className="container flex justify-center h-14 md:w-[165px] font-roboto rounded-[50px] cursor-pointer bg-white text-Black border-2 border-black sm:text-mobile-buttons"
                  type="submit"
                />
              ) : (
                <input
                  className="container flex justify-center h-14 md:w-[165px] font-roboto text-white rounded-[50px] bg-Green cursor-pointer hover:bg-white hover:text-Black hover:border-2 hover:border-black sm:text-mobile-buttons"
                  type="submit"
                />
              )}
              {submitFail === true ? null : (
                <div className="container flex md:w-[220px] md:ml-3">
                  <p className="font-open-sans text-Red mt-3 md:mt-2 sm:text-mobile-errors">
                    There was a problem submitting.
                    <br />
                    Please try again.
                  </p>
                </div>
              )}
            </div>
          </form>
          <p className="container flex text-Grey mt-3 mb-4 md:mt-5 sm:text-mobile-legal">
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
