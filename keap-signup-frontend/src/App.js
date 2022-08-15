import { ReactComponent as KeapLogo } from "./images/keap-logo.svg";
import BannerText from "./components/BannerText";
import DescriptionText from "./components/DescriptionText";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-scroll">
      <div className="container flex flex-row justify-center m-auto mt-3 mb-10">
        <KeapLogo className="w-20" />
      </div>
      <BannerText />
      <div className="flex sm:flex-col sm:items-center md:flex-row md:w-[1200px] md:mt-6">
        <DescriptionText />
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
