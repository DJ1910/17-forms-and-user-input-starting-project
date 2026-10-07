import { useRef, useState } from "react";

export default function Login() {
  const [emailIsValid, setEmailIsValid] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(
    //   "User email: " +
    //     emailRef.current.value +
    //     "\nUser password: " +
    //     passwordRef.current.value
    // );

    if (!emailRef.current.value.includes("@")) {
      setEmailIsValid(false);
      return;
    }

    setEmailIsValid(true);
    console.log("Sending HTTP request...");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">
            {!emailIsValid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
