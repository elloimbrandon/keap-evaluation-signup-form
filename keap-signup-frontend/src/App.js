// ** DON'T FORGET TO PUSH TO MAIN BRANCH AFTER STABLE VERSION! **

// ** Packages **
// (Axios) npm install axios
// (Tailwind Css) npm install -D tailwindcss; npx tailwindcss init
// (Tailwind Css update config) npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch
// (Tailwind Css verbose stylesheet) <link href="/dist/index.css" rel="stylesheet">
// (Email Validator) npm install email-validator
// (Profanity Check) npm install profanity-finder

// use yup for error text field

import "./App.css";
import FormArea from "./components/formArea";
import { ReactComponent as KeapLogo } from "./images/keap-logo.svg";

function App() {
  return (
    // consider not making whole container flex
    <div className="flex flex-col items-center h-screen w-screen overflow-scroll">
      {/* Keap logo div below */}
      <div className="container flex flex-row justify-center m-auto mt-3 mb-10">
        <KeapLogo className="w-20" />
      </div>
      {/* Text container Grow */}
      <div className="container flex flex-col items-center m-auto -space-y-4">
        <h1 className="font-roboto text-Black xsm:text-mobile-h1 sm:text-mobile-h1 md:text-desktop-h1">
          <mark className="text-Green bg-transparent">Grow&nbsp;</mark>your
          business
        </h1>
        <h1 className="font-roboto xsm:text-mobile-h1 sm:text-mobile-h1 md:text-desktop-h1">
          with automation
        </h1>
      </div>
      {/* Text container sign up tips */}
      <div className="flex flex-col items-center w-full m-auto mt-8 pt-8 bg-Blue">
        <h2 className="font-roboto text-white mb-3 xsm:text-mobile-h2 sm:text-mobile-h2 md:text-desktop-h2">
          Sign up to get tips
        </h2>
        {/* Text container for sign up tips description */}
        <div className="container flex flex-col items-center pl-5 pr-5 pb-20">
          <p className="font-open-sans text-white xsm:text-mobile-body sm:text-mobile-body md:text-desktop-body">
            Capture leads automatically through built- <br /> in landing pages,
            and automatically add <br /> them to your contacts with advanced
            <br />
            segmentation.
          </p>
        </div>
      </div>
      {/* Form container */}
      {/* Change height & width to match, maybe take out container too.*/}
      <FormArea />
    </div>
  );
}

export default App;

// ** App Plan **
// Install packages needed
// Initially set up file structure
// Copy images
// Start development of mobile version layout
// Handle key form functions, consider error management early
// Test api calls for success and fail responses
// Handle verify email format before making api req.
// Let api response dictate name errors
// Create success page and possible "Back to sign up form"

// ** Notes **
// * (Tailwind color text) - text-Green
// * (Tailwind text size custom) - text-mobile-h1
// * ex. <h1 className="text-6xl font-open-sans">Welcome</h1>
