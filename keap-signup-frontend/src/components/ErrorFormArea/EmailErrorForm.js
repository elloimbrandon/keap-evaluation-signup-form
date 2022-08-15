import {
  inputHandler,
  handleSubmitButtonColor,
} from "../ParsingFunctions/InputHandlers";

const EmailErrorForm = ({ email, setEmail, setSubmitButtonColor }) => {
  return (
    <>
      <input
        className="font-open-sans w-full border-2 border-Red rounded-md p-3 mb-2 caret-Green outline-Red xsm:text-mobile-inputs sm:text-mobile-inputs sm:text-mobile-inputs"
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
      <p className="font-open-sans text-Red mb-3 xsm:text-mobile-errors sm:text-mobile-errors">
        Email does not match format <br className="md:hidden" />
        "someone@email.com"
      </p>
    </>
  );
};

export default EmailErrorForm;
