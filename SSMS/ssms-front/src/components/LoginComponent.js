import React, { useState } from "react";

export function Login() {
  const [form, setForm] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function ChangeForm() {
    // Perform any form submission logic here

    // For this example, let's just set the submitted state to true
    setSubmitted(true);
  }

  return (
    <div className="container-fluid d-flex justify-content-center bg-dark text-white">
      {submitted ? (
        <div>
          <h2>Welcome!</h2>
          {<div>
                <h2>New User Registration</h2>
                <form>
                    <input type="text" />
                    <button>Register</button>
                </form>
            </div>}
        </div>
      ) : (
        <form>
          <h2>User Login</h2>
          <dl>
            <dt className="form-label">Name</dt>
            <dd> <input type="text" className="form-control" /> </dd>
            <dt className="form-label">Password</dt>
            <dd> <input type="password" className="form-control" /> </dd>
            <button onClick={ChangeForm} className="btn btn-success w-100">Submit</button>
          </dl>
        </form>
      )}
    </div>
  );
}
