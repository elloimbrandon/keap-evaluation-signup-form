import React, { useState } from "react";
import axios from "axios";
import FirstNameForm from "./FormArea/FirstNameForm";
import LastNameForm from "./FormArea/LastNameForm";
import EmailForm from "./FormArea/EmailForm";
import FirstNameErrorForm from "./ErrorFormArea/FirstNameErrorForm";
import LastNameErrorForm from "./ErrorFormArea/LastNameErrorForm";
import EmailErrorForm from "./ErrorFormArea/EmailErrorForm";
import SuccessSignUp from "./FormArea/SuccessSignUp";
import ErrorSignUp from "./FormArea/ErrorSignUp";
import TermsAndService from "./FormArea/TermsAndService";
import {
  checkEmailFormat,
  checkInputNameFormat,
} from "./ParsingFunctions/InputHandlers";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameCheck, setFirstNameCheck] = useState(true);
  const [lastNameCheck, setLastNameCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [submitFail, setSubmitFail] = useState(true);
  const [signedUp, setSignedUp] = useState(false);
  const [submitButtonColor, setSubmitButtonColor] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirstNameCheck(true);
    setLastNameCheck(true);
    setEmailCheck(true);
    setSubmitFail(true);
    setSubmitButtonColor(false);
    getResponse();
  };

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
          if (response.data.success === true) {
            setSignedUp(true);
          }
        });
    } catch (err) {
      checkEmailFormat(email, setEmailCheck, setSubmitFail);
      if (err.response.data.errors[0] === "First name is required.") {
        checkInputNameFormat(firstName, setFirstNameCheck, setSubmitFail);
        checkInputNameFormat(lastName, setLastNameCheck, setSubmitFail);
      }
    }
  };

  return (
    <div className="flex flex-col w-[96%] md:w-[50%] md:h-[590px] md:justify-center items-center sm:-translate-y-11 md:-translate-y-24 bg-white rounded-2xl shadow-lg md:shadow-[0_10px_60px_-15px_rgba(0,0,0,0.1)]">
      {signedUp === true ? (
        <SuccessSignUp />
      ) : (
        <div className="flex flex-col md:items-center w-[90%] md:w-[80%] md:h-[85%] pt-4 md:pt-2">
          <form onSubmit={handleSubmit} className="flex flex-col md:w-full">
            <p className="font-open-sans pb-2 sm:text-mobile-inputs">
              First name
            </p>
            {firstNameCheck === true ? (
              <FirstNameForm
                firstName={firstName}
                setFirstName={setFirstName}
                setSubmitButtonColor={setSubmitButtonColor}
              />
            ) : (
              <FirstNameErrorForm
                firstName={firstName}
                setFirstName={setFirstName}
                setSubmitButtonColor={setSubmitButtonColor}
              />
            )}
            <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs">
              Last name
            </p>
            {lastNameCheck === true ? (
              <LastNameForm
                lastName={lastName}
                setLastName={setLastName}
                setSubmitButtonColor={setSubmitButtonColor}
              />
            ) : (
              <LastNameErrorForm
                lastName={lastName}
                setLastName={setLastName}
                setSubmitButtonColor={setSubmitButtonColor}
              />
            )}
            <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
              Email
            </p>
            {emailCheck === true ? (
              <EmailForm
                email={email}
                setEmail={setEmail}
                setSubmitButtonColor={setSubmitButtonColor}
              />
            ) : (
              <EmailErrorForm
                email={email}
                setEmail={setEmail}
                setSubmitButtonColor={setSubmitButtonColor}
              />
            )}
            <div className="container flex flex-col md:flex-row">
              {submitButtonColor ? (
                <input
                  className="container flex justify-center h-14 md:w-[165px] font-roboto rounded-[50px] cursor-pointer bg-white text-Black border-2 border-black sm:text-mobile-buttons"
                  type="submit"
                />
              ) : (
                // <SubmitButtonWhite />
                <input
                  className="container flex justify-center h-14 md:w-[165px] font-roboto text-white rounded-[50px] bg-Green cursor-pointer hover:bg-white hover:text-Black hover:border-2 hover:border-black sm:text-mobile-buttons"
                  type="submit"
                />
                // <SubmitButtonGreen />
              )}
              {submitFail === true ? null : <ErrorSignUp />}
            </div>
          </form>
          <TermsAndService />
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
