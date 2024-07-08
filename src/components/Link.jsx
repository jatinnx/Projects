import React, { useState } from 'react';
// import Signbox from './Signbox';
import Signbox from './x';

function Link() {
  const [isSignboxActive, setIsSignboxActive] = useState(false);

  const activateSignbox = (isActive) => {
    setIsSignboxActive(isActive);
    console.log("click")
  };

  return (
    <div>
      <div className="hero-link">
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
        <button>
          <h4>Create Account</h4>
        </button>
        <p className="mimi-terms">
          By signing up, you agree to the <span>Terms of Service</span> and
          <span>Privacy Policy</span>, including <span>Cookie Use</span>.
        </p>
        <div className="signup">
          <h3>Already Have An Account?</h3>
          <button onClick={() => activateSignbox(true)}>
            <h4>Sign in</h4>
          </button>
        </div>
      </div>

      {isSignboxActive && <Signbox />}

      {/* {isSignboxActive && <div className="overlay" onClick={() => activateSignbox(false)}></div>} */}
    </div>
  );
}

export default Link;
