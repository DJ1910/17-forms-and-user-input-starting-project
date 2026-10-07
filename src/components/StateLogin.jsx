import Input from "./Input.jsx";

import { isEmail, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    data: enteredEmail,
    isValid: isEmailValid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputFocus: handleEmailFocus,
    handleReset: handleEmailReset,
  } = useInput("", isEmail);

  const {
    data: enteredPassword,
    isValid: isPasswordValid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleInputFocus: handlePasswordFocus,
    handleReset: handlePasswordReset,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !isEmailValid ||
      enteredEmail === "" ||
      enteredPassword === "" ||
      !isPasswordValid
    ) {
      return;
    }
    console.log(
      "User email: " + enteredEmail + "\nUser password: " + enteredPassword
    );
  }

  function handleReset() {
    handleEmailReset();
    handlePasswordReset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
          error={!isEmailValid && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredPassword}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          onFocus={handlePasswordFocus}
          error={
            !isPasswordValid &&
            "Password length should be atleast 6 characters."
          }
        />
      </div>

      <p className="form-actions">
        <button onClick={handleReset} className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
