import "../App.css";
import { useState } from "react";
import axios from "axios";

const emailValidator = require("email-validator");

const FormArea = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "https://keap.com/api/project/leads";
    axios
      .post(url, {
        first_name: firstName,
        last_name: lastName,
        email_address: email,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col w-[96%] items-center -translate-y-11 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col items-center pl-1 pt-4">
        <form onSubmit={handleSubmit}>
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            First name
          </p>
          <input
            className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-2 caret-Green
              outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={handleFirstName}
            autoComplete="off"
          />
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            Last name
          </p>
          <input
            className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-3 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={handleLastName}
            autoComplete="off"
          />
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            Email
          </p>
          <input
            className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-3 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
            type="text"
            name="email_address"
            placeholder="Email address"
            onChange={handleEmail}
            autoComplete="off"
          />
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
