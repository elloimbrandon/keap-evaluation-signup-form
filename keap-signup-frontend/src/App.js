// ** DON'T FORGET TO PUSH TO MAIN BRANCH! **

// ** Packages **
// (Axios) npm install axios
// (Tailwind Css) npm install -D tailwindcss; npx tailwindcss init
// (Tailwind Css) npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch
// (Tailwind Css) <link href="/dist/index.css" rel="stylesheet">

// use yup for error text field

import "./App.css";
import axios from "axios";
import { ReactComponent as KeapLogo } from "./images/keap-logo.svg";

function App() {
  return (
    <div>
      {/* <img src={require("./images/keap-logo.svg")} /> */}
      <div className="container flex flex-row justify-center m-auto mt-3 mb-14 ">
        <KeapLogo className="w-1/4" />
      </div>
      <div className="container flex flex-col justify-center m-auto -space-y-4 border border-black">
        <h1 className="flex justify-center m-auto sm:text-mobile-h1 md:text-desktop-h1 font-roboto ">
          <mark className="text-Green bg-transparent">Grow&nbsp;</mark>your
          business
        </h1>
        <h1 className="flex justify-center sm:text-mobile-h1 md:text-desktop-h1 font-roboto">
          with automation
        </h1>
      </div>
    </div>
  );
}

export default App;

// ** Process Plan **
// Install packages needed
// Initially set up file structure
// Copy images
// Start development of mobile version layout
// Test api calls for success and fail responses

// ** Notes **
// * (Tailwind color text) - text-Green
// * (Tailwind text size custom) - text-mobile-h1
// * <h1 className="text-6xl font-open-sans">Welcome</h1>
