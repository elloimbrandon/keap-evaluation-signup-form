import {
  inputHandler,
  handleSubmitButtonColor,
} from "../ParsingFunctions/InputHandlers";

const EmailForm = ({ email, setEmail, setSubmitButtonColor }) => {
  return (
    <>
      <input
        className="font-open-sans w-full border border-Grey rounded-md p-3 mb-3 md:mb-7 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
        type="text"
        name="email_address"
        placeholder="Email address"
        onChange={(event) => {
          inputHandler(event, setEmail);
        }}
        value={email}
        autoComplete="off"
        onFocus={() => {
          handleSubmitButtonColor(true, setSubmitButtonColor);
        }}
        onBlur={() => {
          handleSubmitButtonColor(false, setSubmitButtonColor);
        }}
      />
    </>
  );
};

export default EmailForm;
