import {
  inputHandler,
  handleSubmitButtonColor,
} from "../ParsingFunctions/InputHandlers";

const LastNameForm = ({ lastName, setLastName, setSubmitButtonColor }) => {
  return (
    <input
      className="font-open-sans w-full border border-Grey rounded-md p-3 mb-3 md:mb-9 caret-Green outline-Blue xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
      type="text"
      name="last_name"
      placeholder="Last name"
      onChange={(event) => {
        inputHandler(event, setLastName);
      }}
      value={lastName}
      autoComplete="off"
      onFocus={() => {
        handleSubmitButtonColor(true, setSubmitButtonColor);
      }}
      onBlur={() => {
        handleSubmitButtonColor(false, setSubmitButtonColor);
      }}
    />
  );
};

export default LastNameForm;
