import { useEffect, useState } from "react";
import styles from "./Matches.module.css";
import logo from "../../images/swooplogo.svg";
import swoop from "../../images/swoop.svg";
import plus from "../../images/plus.svg";
import bannerpng from "../../images/bannerpng.png";
import threedots from "../../images/threedots.svg";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../../Components/Navbar/Navbar";
import Timer from "./Timer";
import usdc from "../../images/USDC 1.png";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddMatch from "./AddMatch";
import AddBanner from "./AddBanner";

function Matches() {
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const { viewlog, createViewLog, processWinnigLog, getMatches, matches } = useAuth();

  const toContests = (matchId) => {
    navigate("/contests/", { state: { matchId: matchId } });
  };

  const [openCredit, setOpenCredit] = useState(false);

  const handleCloseCredit = () => {
    setOpenCredit(false);
  };

  const [openBanner, setOpenBanner] = useState(false);

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className={styles.matches}>
      {/* <Navbar /> */}
      <div className={styles.matchesInfo}>
        <div className={styles.title}>All Matches</div>
        <div className={styles.matchesList}>
          {matches &&
            matches.map((match, index) => {
              return (
                <div key={match.key} className={styles.match}>
                  <div className={styles.matchId}>Match ID {index + 1}</div>
                  <div
                    className={styles.matchInfo}
                    onClick={() => {
                      toContests(match.key);
                    }}
                  >
                    <div className={styles.teams}>{match.short_name}</div>
                    {/* <div className={styles.time}>30m:15s</div> */}
                    <Timer
                      clsName={styles.time}
                      sec={
                        match["start_at"]["_seconds"] * 1000 +
                        match["start_at"]["_nanoseconds"]
                      }
                    />
                  </div>
                  <div className={styles.cwl}>
                    <div className={styles.teams}>Create Winning Logs</div>
                  </div>
                  <div className={styles.thd}>
                    <img src={threedots} alt="" />
                  </div>
                  {/* <div className={styles.vwl}>
                    <div className={styles.teams}>View Winning Logs</div>
                  </div> */}
                  <div className={styles.msP}>
                    <div className={styles.teams}>Add Missing Players</div>
                  </div>
                  
                  
                  <div
                    className={styles.ub}
                    onClick={() => {
                      setOpenBanner(true);
                    }}
                  >
                    <div style={{display:"flex"}} className={styles.teams}>
                      <img style={{height:"48px"}} src={bannerpng} alt="" />
                      Upload Banner</div>
                  </div>
                  <div className={styles.cp}>
                    <div style={{display:"flex"}} className={styles.teams}>
                    <img style={{height:"48px"}} src={usdc} alt="" />
                      Credit Players</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          onClick={() => {
            setOpenCredit(true);
          }}
          className={styles.addMatch}
        >
          <div>
            <img src={plus} alt="plus" />
            <p>ADD MATCH</p>
          </div>
        </div>
      </div>
      <Modal open={openCredit} onClose={handleCloseCredit}>
        <Box sx={style}>
          <AddMatch handleCloseCredit={handleCloseCredit} />
        </Box>
      </Modal>

      {openBanner && (
        <AddBanner openBanner={openBanner} setOpenBanner={setOpenBanner} />
      )}
    </div>
  );
}

export default Matches;
