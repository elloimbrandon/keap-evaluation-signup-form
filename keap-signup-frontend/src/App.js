// ** DON'T FORGET TO PUSH TO MAIN BRANCH AFTER STABLE VERSION! **
// ** DON'T FORGET ABOUT SUBMIT ERROR BELOW BUTTON
// ** Tad more optimization for normal screen sizes

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
      {/* Might need (-space-y-4) (text-center) (span for color) */}
      <div className="flex flex-row sm:w-[320px] md:w-[1200px] sm:mb-4 md:mb-32 md:mt-16 lg:3/4 text-center justify-center sm:leading-[2.2rem] md:leading-none">
        <h1 className="font-roboto sm:text-mobile-h1 md:text-desktop-h1">
          <span className="text-Green">Grow</span> your business with automation
        </h1>
      </div>
      {/* Text container sign up tips */}
      {/* Div flex wrapper for desktop row md:w-[65%] */}
      <div className="flex sm:flex-col sm:items-center md:flex-row md:w-[1200px] md:mt-6">
        <div className="flex flex-col items-center w-screen m-auto mt-3 pt-8 bg-Blue sm:h-[36%] md:w-[620px] md:h-[360px] md:items-start md:rounded-l-2xl">
          <h2
            className="font-roboto text-white mb-2 sm:text-mobile-h2 md:text-desktop-h2 md:ml-20 md:mt-10 md:mb-3
        "
          >
            Sign up to get tips
          </h2>
          {/* Text container for sign up tips description */}
          {/* fix sentences for desktop!! */}
          <div className="container flex flex-col items-center md:items-start pl-5 pr-5 pb-7">
            <p className="container flex-row w-[320px] md:w-[80%] font-open-sans text-white sm:text-mobile-body md:text-desktop-body md:ml-16">
              Capture leads automatically through built-in landing pages, and
              automatically add them to your contacts with advanced
              segmentation.
            </p>
            <p className="font-open-sans font-extrabold text-white ml-16 mt-8 underline decoration-4 underline-offset-4 text-desktop-body leading-4 sm:invisible md:visible">
              Learn more
            </p>
          </div>
        </div>
        {/* Form container */}
        {/* Change height & width to match, maybe take out container too.*/}
        <FormArea />
      </div>
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

// TO-DO SUNDAY
// error form input length needs to be 100% for responsive(!)
// Fix success screen on desktop.
// Break error checks into components
// Clean
// Do box shadow for desktop top
// Review tasks again
// Test Test Test
// Check to see if input error checks even needed
// See if you can put functions into another file
// Consider using arbitrary widths for desktop to make it responsive still but words not getting messed up

// ** Notes **
// * (Tailwind color text) - text-Green
// * (Tailwind text size custom) - text-mobile-h1
// * ex. <h1 className="text-6xl font-open-sans">Welcome</h1>

// graveyard

/* <div className="container flex flex-col items-center m-auto -space-y-4 md:text-desktop-h1 lg:text-desktop-h1 border border-black">
        <div className="flex flex-row">
          <h1 className="font-roboto text-Black sm:text-mobile-h1 md:text-desktop-h1 lg:text-desktop-h1">
            <mark className="text-Green bg-transparent md:text-desktop-h1 lg:text-desktop-h1">
              Grow&nbsp;
            </mark>
            your business
            your business with automation
          </h1>
          <h1>width</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="font-roboto mr-2 sm:text-mobile-h1 md:invisible">
            with
          </h1>
          <h1 className="font-roboto sm:text-mobile-h1 md:text-desktop-h1 lg:text-desktop-h1">
            automation
          </h1>
        </div>
      </div> */
