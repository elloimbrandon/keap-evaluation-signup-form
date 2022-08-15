import {
  inputHandler,
  handleSubmitButtonColor,
} from "../ParsingFunctions/InputHandlers";

const LastNameErrorForm = ({ lastName, setLastName, setSubmitButtonColor }) => {
  return (
    <>
      <input
        className="font-open-sans w-full border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red sm:text-mobile-inputs sm:text-mobile-inputs"
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
      <p className="font-open-sans text-Red mb-3 md:mb-4 sm:text-mobile-errors">
        Last name required
      </p>
    </>
  );
};

export default LastNameErrorForm;
