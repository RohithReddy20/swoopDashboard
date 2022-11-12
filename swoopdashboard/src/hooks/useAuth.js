import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [participants, setParticipants] = useState([]);
  const [matches, setMatches] = useState([]);
  const [contests, setContests] = useState([]);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async () => {
    const data = {
      username: document.getElementById("login_id").value,
      password: document.getElementById("login_password").value,
    };
    await fetch(
      "https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setUser({
          userName: document.getElementById("login_id").value,
          password: document.getElementById("login_password").value,
          accessToken: data["data"]["access_token"],
        });
        navigate("/matches");
      });
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const viewlog = async () => {
    await fetch(
      "https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/match/winnings/view-log?match_key=icc_wc_t20_2022_g6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Thunder Client (http://www.thunderclient.com)",
          "x-access-token": user?.accessToken,
        },
        // body: JSON.stringify(data)
      }
    )
      .then((response) => {
        if(response.status!==200){
          setUser(null);
        }
        response.json()})
      .then((data) => {
        setParticipants(data?.all);
      })
      .catch((err) => {
        setUser(null);
        navigate("/");
      });
  };


  const getMatches = async () => {
    await fetch(
      "https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/match/upcoming",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'User-Agent': 'Thunder Client (http://www.thunderclient.com)',
          "x-access-token": user?.accessToken,
        },
        // body: JSON.stringify(data)
      }
    )
      .then((response) => {
        // console.log(response);
        if(response.status!==200){
          setUser(null);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setMatches(data.data);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        navigate("/");
      });
  };

  const getContests = async (matchId) => {
    await fetch(
      "https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/match/contest/all?match_id=" +
        matchId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive",
          // 'User-Agent': 'Thunder Client (http://www.thunderclient.com)',
          "x-access-token": user?.accessToken,
        },
        // body: JSON.stringify(data)
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setContests(data.data);
        // console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        navigate("/");
      });
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      viewlog,
      getMatches,
      matches,
      getContests,
      contests,
    }),
    [user, matches, contests]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
