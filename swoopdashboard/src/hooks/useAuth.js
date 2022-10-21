import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async () => {
    const data = {
      username : "shubham",
      password : "Q8gDV7g5c#B0",
    }
    await fetch("https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/login",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then(data => {
      setUser({
        userName: userName,
        password: password ,
        accessToken: data
      })
    navigate("/matches");
    });
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const viewlog = async () => {
    // await fetch("https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/match/winnings/view-log?match_key=icc_wc_t20_2022_g6",{
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'User-Agent': 'Thunder Client (http://www.thunderclient.com)',
    //     'x-access-token': user?.accessToken
    //   },
    //   // body: JSON.stringify(data)
    // }).then((response) => response.json()).then(data => {
    //   setParticipants(data?.all)
    // }).catch(err => console.log(err));
  }

  const value = useMemo(
    () => ({
      user,
      setUser,
      userName,
      setUserName,
      password, 
      setPassword,
      login,
      logout,
      viewlog
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};