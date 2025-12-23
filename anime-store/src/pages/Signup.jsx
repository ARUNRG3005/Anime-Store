import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [psw1, setPsw1] = useState("");
  const [psw2, setPsw2] = useState("");
  const [same, setSame] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  /* PASSWORD HANDLERS */
  const handlePassword = (e) => {
    setPsw1(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setPsw2(e.target.value);
    setSame(psw1 === e.target.value);
  };

  /* CHECKBOX */
  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  /* SUBMIT */
  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !psw1 || !psw2) {
      setError("All fields are required");
      return;
    }

    if (!same) {
      setError("Passwords do not match");
      return;
    }

    if (!isChecked) {
      setError("You must accept terms & conditions");
      return;
    }

    setError("");
    alert("Account created successfully");
    navigate("/");
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={handleSignup}>
            <p id="heading">Create Account</p>

            <div className="field">
              <input
                type="email"
                className="input-field"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={psw1}
                onChange={handlePassword}
              />
            </div>

            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                value={psw2}
                onChange={handleConfirmPassword}
              />
            </div>

            {!same && <p className="error">Passwords not matched</p>}

            {/* TERMS */}
            <div className="form-check">
              <input type="checkbox" onChange={handleCheck} />
              <label>I accept the terms & conditions</label>
            </div>

            {error && <p className="error">{error}</p>}

            <div className="btn">
              <button className="button1" type="submit">
                Sign Up
              </button>

              <Link to="/login" className="button2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at top, #1a2e20 0%, #020024 100%);

  .card {
    width: 380px;
    border-radius: 26px;
    padding: 3px;
    background: linear-gradient(135deg, #00ff75, #3700ff);
  }

  .card2 {
    background: #171717;
    border-radius: 24px;
    padding: 32px 26px;
    width: 100%;
  }

  .card:hover {
    box-shadow:
      0 0 25px rgba(0, 255, 117, 0.6),
      0 0 45px rgba(55, 0, 255, 0.6);
    transform: scale(1.02);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  #heading {
    text-align: center;
    color: white;
    font-size: 1.6rem;
    margin-bottom: 16px;
  }

  .field {
    background: #0f0f0f;
    border-radius: 30px;
    padding: 12px 16px;
  }

  /* INPUT FIELD FIX */
.input-field {
  background-color: transparent !important;
  border: none;
  outline: none;
  width: 100%;
  color: #ffffff;
  font-size: 14px;
  padding: 6px 4px;
  line-height: 1.4;
  caret-color: #00ff75;
}

/* PLACEHOLDER FIX */
.input-field::placeholder {
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  line-height: 1.4;
}

/* REMOVE BROWSER AUTOFILL WHITE BG (VERY IMPORTANT) */
.input-field:-webkit-autofill,
.input-field:-webkit-autofill:hover,
.input-field:-webkit-autofill:focus {
  -webkit-text-fill-color: #ffffff;
  -webkit-box-shadow: 0 0 0px 1000px #0f0f0f inset;
  transition: background-color 9999s ease-in-out 0s;
}

  }

  .form-check {
    display: flex;
    gap: 10px;
    color: #cfcfcf;
    font-size: 14px;
    margin-left: 12px;
  }

  .btn {
    display: flex;
    gap: 10px;
    margin-top: 18px;
  }

  .button1,
  .button2 {
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #252525;
    color: white;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
  }

  .button1:hover {
    background: #00ab06;
  }

  .button2:hover {
    background: #9c9221;
  }

  .error {
    color: #ff4d4d;
    font-size: 13px;
    text-align: center;
  }
`;

export default Signup;
