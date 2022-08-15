import {
  inputHandler,
  handleSubmitButtonColor,
} from "../ParsingFunctions/InputHandlers";

const FirstNameForm = ({ firstName, setFirstName, setSubmitButtonColor }) => {
  return (
    <input
      className="font-open-sans w-full border border-Grey rounded-md p-3 mb-2 md:mb-9 caret-Green
              outline-Blue sm:text-mobile-inputs sm:text-mobile-inputs"
      type="text"
      name="first_name"
      placeholder="First name"
      onChange={(event) => {
        inputHandler(event, setFirstName);
      }}
      value={firstName}
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

export default FirstNameForm;
