import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

import { useAuth } from '../../hooks/useAuth';


import logo from "../../images/swooplogo.svg"

function Login() {

  const { userName, password, setUserName, setPassword, setUser, user, login } = useAuth();
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();


  const handleForm = async (e) => {
    setDisabled(true);
    e.preventDefault();
    login()
    setDisabled(false);
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
            <form onSubmit={handleForm}>
              <input type="text" onChange={(e) => {setUserName(e.target.value)}}  placeholder="username" />
              <input type="text" onChange={(e) => {setPassword(e.target.value)}}  placeholder="password" />
              <div><input type="submit" value="LOGIN" disabled={disabled} /></div>
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