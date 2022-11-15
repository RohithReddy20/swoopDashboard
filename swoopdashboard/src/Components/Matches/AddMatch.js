import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import styles from "./Matches.module.css";

import AlertParent from "../Alert/Alert";
import { StyledEngineProvider } from "@mui/material/styles";

function AddMatch({ handleCloseCredit }) {
  const [matchId, setMatchId] = useState("");

  const { user, getMatches } = useAuth();

  const fail = () => {
    setType("error");
    setResult("Failed to add match");
    setInProgress(false);
  };

  const addMatch = async (match_id) => {
    await fetch(
      "https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/match/add-roanuz?match_key=" +
        match_id,
      {
        method: "POST",
        headers: {
          "x-access-token": user?.accessToken,
        },
        // body: JSON.stringify(data)
      }
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        if (!data.success) {
          fail();
        }
        if (data.success) {
          getMatches();
          setOpen(false);
        }
      })
      .catch((err) => {
        fail();
      });
  };

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [result, setResult] = useState("Message sent successfully");
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

  return (
    <div style={{ height: "100%" }}>
      <div className={styles.addMatchC}>
        <TextField
          required
          id="outlined-required"
          label="Match Id"
          onChange={(e) => setMatchId(e.target.value)}
          value={matchId}
        />
        {!inProgress ? (
          <button
            onClick={async () => {
              setInProgress(true);
              await addMatch(matchId);
              handleClick();
            }}
            className={styles.add}
          >
            Add Match
          </button>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
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
    </div>
  );
}

export default AddMatch;
