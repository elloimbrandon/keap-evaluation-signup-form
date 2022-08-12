import "../App.css";
import { useState } from "react";
import axios from "axios";
// const querystring = require("querystring");
// const qs = require("qs");

const FormArea = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "https://keap.com/api/project/leads";
    const test =
      "first_name=brandon&last_name=feltz&email_address=bfeltz@gmail.com";
    axios.post(url, test).then((response) => {
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
            name="first name"
            placeholder="First name"
            // change later {handleChange}
            onChange={handleFirstName}
            autoComplete="off"
          />
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            Last name
          </p>
          <input
            className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-3 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
            type="text"
            name="last name"
            placeholder="Last name"
            // change later {handleChange}
            onChange={handleLastName}
            autoComplete="off"
          />
          <p className="font-open-sans pb-2 xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs">
            Email
          </p>
          <input
            className="font-open-sans w-80 border border-Grey rounded-md p-3 mb-3 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
            type="text"
            name="email address"
            placeholder="Email address"
            // change later {handleChange}
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
