import React, { useRef } from "react";
import { useState } from "react";

function Signbox(params) {
  const [username, setUsername] = useState("");
  const [showMiddleDiv, setShowMiddleDiv] = useState(false);
  const [showPassDiv, setShowPassDiv] = useState(false);

  const inputUsernameRef = useRef(null);
  const middleDivRef = useRef(null);
  const passDivRef = useRef(null);

  function displaypass_in() {
    if (middleDivRef.current && passDivRef.current) {
      middleDivRef.current.classList.add("mid-div2");
      passDivRef.current.style.display = "block";
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function Submitbtn(event) {
    event.preventDefault();
    if (username.trim()) {
      const usernamesInput = document.getElementById("input-username");
      if (usernamesInput) {
        usernamesInput.value = username;
      }
      if (passDivRef.current) {
        passDivRef.current.classList.add("wait1");
      }
      if (middleDivRef.current) {
        middleDivRef.current.classList.add("mid-div");
      }
      setTimeout(displaypass_in, 2000);
    } else {
      alert("Please enter a username");
    }
  }

  //   const isPassVisible = true;

  //   const [isSignboxActive, setIsSignboxActive] = useState(false);

  const activateSignbox = (isActive) => {
    setIsSignboxActive(isActive);
    console.log("click");
  };

  return (
    <div>
      <div className="sign-box">
        <div className="cross">
          <img src="src/image/close.png" alt="" className="cross-img" />
        </div>
        <div className="x2">
          <img src="src/image/x.jpg" alt="" />
        </div>

        <div className="input-box">
          <div className="wait">
            <h2 className="headline-below">Sign in to X</h2>
            <button>
              <img src="src/image/google.png" alt="Google" />
              <h4>Sign up with Google</h4>
            </button>
            <button>
              <img src="src/image/apple.png" alt="Apple" />
              <h4>Sign up with Apple</h4>
            </button>

            <div className="separator">
              <hr />
              <p>or</p>
              <hr />
            </div>

            <div className="inputbox">
              <div className="userinput">
                <input
                  type="text"
                  id="input-username"
                  placeholder=" "
                  value={username}
                  onChange={handleUsernameChange}
                  ref={inputUsernameRef}
                />
                <label htmlFor="input-username">Enter Username..</label>
              </div>
            </div>

            <button id="submit-btn" onClick={Submitbtn}>
              <h4>Next</h4>
            </button>


            <button href="" className="link">
              <h4>Forget password?</h4>
            </button>
          </div>
        </div>

        <div ref={middleDivRef} className="middle">
        {/* Middle div content */}
      </div>

      <div ref={passDivRef} className="pass-div">
        {/* Password div content */}
      </div>
{/* 
        <div class="middle" id="midd"></div>

        <div className="Passbox"></div> */}
      </div>
    </div>
  );
}

export default Signbox;
