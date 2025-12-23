import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


const Login = () => {
    function home(event){
        alert("logged in successfully");
        navigate("/");
        event.preventDefault();
    }
    function forget(event){
        alert("Password reset link sent to your registered email address");
        event.preventDefault();
        navigate("/Signup");
    }


    const navigate=useNavigate();
    const[psw1,setPsw1]=useState("");
    const[same,setSame]=useState(true);

    function pswc1(event){
        setPsw1(event.target.value);
    }

    const[isChecked,setIsChecked]=useState(false);
    function verfied(e){
       if (e.target.checked) {
            setIsChecked(true);
          } else {
            setIsChecked(false);
          }
    }
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <form className="form">
            <p id="heading">Login</p>
            <div className="field">
              <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input type="text" className="input-field" placeholder="Username" autoComplete="off"/>
            </div>
            <div className="field">
              <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <input type="password" value={psw1} onChange={pswc1} className="input-field" placeholder="Password" />
            </div>
             <div className="mb-3 form-check">
                <input onClick={verfied} type="checkbox" className="form-check-input"  required/>
                <label className="form-check-label" >I Accept the trems and condition</label>
                {isChecked && <p>Agreed</p>}
            </div>
            {!same && <p>password not matched</p>}
            <div className="btn">
              <button className="button1" onClick={home}>Login</button>

              <Link to="/signup" className="button2">Sign Up</Link>

            </div>
            <button className="button3" onClick={forget}>Forgot Password</button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Center container */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at top, #1a2e20 0%, #020024 100%);

  /* OUTER GLOW CARD */
  .card {
    width: 380px;
    border-radius: 26px;
    padding: 3px; /* controls glow thickness */
    background: linear-gradient(135deg, #00ff75, #3700ff);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .card:hover {
    box-shadow:
      0 0 25px rgba(0, 255, 117, 0.6),
      0 0 45px rgba(55, 0, 255, 0.6);
    transform: scale(1.02);
  }

  /* INNER CARD */
  .card2 {
    background: #171717;
    border-radius: 24px;
    padding: 32px 26px;
    width: 100%;
  }

  /* FORM */
  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  #heading {
    text-align: center;
    color: #ffffff;
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  /* INPUT FIELD */
  .field {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #0f0f0f;
    border-radius: 30px;
    padding: 12px 16px;
    box-shadow: inset 2px 4px 8px rgba(0,0,0,0.9);
  }

  .input-icon {
    width: 18px;
    height: 18px;
    fill: #bdbdbd;
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
   border: none;
}

/* REMOVE BROWSER AUTOFILL WHITE BG (VERY IMPORTANT) */
.input-field:-webkit-autofill,
.input-field:-webkit-autofill:hover,
.input-field:-webkit-autofill:focus {
  -webkit-text-fill-color: #ffffff;
  -webkit-box-shadow: 0 0 0px 1000px #0f0f0f inset;
  transition: background-color 9999s ease-in-out 0s;
 
}


  /* CHECKBOX */
  .form-check {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #cfcfcf;
    margin-top: 6px;
    margin-left: 15px;
  }

  /* BUTTON GROUP */
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
    font-weight: 500;
    transition: background 0.3s ease, transform 0.2s ease;
    text-decoration: none;
    font-size: 14px;
  }


  .button1:hover {
    background: #00ab06ff;
    transform: translateY(-2px);
  }
  .button2:hover {
    background: #9c9221ff;
    transform: translateY(-2px);
  }

  .button3 {
    margin-top: 14px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background: #252525;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .button3:hover {
    background: #ff0033;
  }
`;

export default Login;
