import React from 'react';
import styles from "./Login.module.css";

import logo from "../../images/swooplogo.svg"

function Login() {

  const handleForm = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.login}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.title}>
          <div>SWOOP</div>
          DASHBOARD
        </div>
        <div className={styles.loginP}>
          <div>Login</div>
          <div className="form">
            <form action={handleForm}>
              <input type="text" placeholder="Enter Mobile No" />
              <div><input type="submit" value="LOGIN" /></div>
            </form>
          </div>
        </div>
        <div className={styles.footer}>
          By Signing up, I agree to the Terms & Conditions and Privacy Policy of Swoop
        </div>
    </div>
  )
}

export default Login