import React, { FormEvent, useRef } from "react";

const SignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (emailRef.current !== null) console.log(emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} id="password" type="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm</label>
        <input ref={confirmPasswordRef} id="confirmPassword" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
