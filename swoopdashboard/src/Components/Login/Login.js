import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

import { useAuth } from "../../hooks/useAuth";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import AlertParent from "../Alert/Alert";
import { StyledEngineProvider } from "@mui/material/styles";

import logo from "../../images/swooplogo.svg";

function Login() {
  const { setUser, user, login } = useAuth();
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("error");
  const [result, setResult] = useState("Login unsuccessful");
  const [inProgress, setInProgress] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setInProgress(true);
    setDisabled(true);
    await login();
    setDisabled(false);
    setInProgress(false);
    handleClick();
  };
  return (
    <>
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
              <input type="text" id="login_id" placeholder="Enter Email" />
              <input
                type="password"
                id="login_password"
                autoComplete="on"
                placeholder="Password"
              />
              <div>
                {inProgress ? (
                  <Box sx={{ display: "flex", justifyContent:"center" }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <input type="submit" value="LOGIN" disabled={disabled} />
                )}
              </div>
            </form>
          </div>
        </div>
        <div className={styles.footer}>
          By Signing in, You agree to the Terms & Conditions and Privacy Policy
          of Swoop.
        </div>
      </div>
      <StyledEngineProvider injectFirst>
        <AlertParent
          type={type}
          open={open}
          setOpen={setOpen}
          handleClick={handleClick}
          handleClose={handleClose}
          result={result}
        />
      </StyledEngineProvider>
    </>
  );
}

export default Login;
