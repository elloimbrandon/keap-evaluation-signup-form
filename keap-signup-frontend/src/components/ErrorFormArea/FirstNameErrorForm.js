import {
  inputHandler,
  handleSubmitButtonColor,
} from "../ParsingFunctions/InputHandlers";

const FirstNameErrorForm = ({
  firstName,
  setFirstName,
  setSubmitButtonColor,
}) => {
  return (
    <>
      <input
        className="font-open-sans w-full border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red
                  sm:text-mobile-inputs sm:text-mobile-inputs"
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
      <p className="font-open-sans text-Red mb-3 md:mb-4 xsm:text-mobile-errors sm:text-mobile-errors">
        First name required
      </p>
    </>
  );
};

export default FirstNameErrorForm;
