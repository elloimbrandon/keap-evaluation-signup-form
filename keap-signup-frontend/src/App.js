// ** DON'T FORGET TO PUSH TO MAIN BRANCH! **

// ** Packages **
// (Axios) npm install axios
// (Tailwind Css) npm install -D tailwindcss; npx tailwindcss init
// (Tailwind Css) npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch
// (Tailwind Css) <link href="/dist/index.css" rel="stylesheet">

import "./App.css";
import axios from "axios"

function App() {
  return (
    <div className="App">
      <h1 className="sm:text-mobile-h1 md:text-desktop-h1 text-Green font-open-sans">Hello World!</h1>
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