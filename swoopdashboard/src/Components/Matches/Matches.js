import { useEffect } from "react";
import styles from "./Matches.module.css";
import logo from "../../images/swooplogo.svg";
import swoop from "../../images/swoop.svg";
import plus from "../../images/plus.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import Timer from "./Timer";

function Matches() {
  const navigate = useNavigate();

  const { viewlog, getMatches, matches } = useAuth();

  const toContests = (matchId) => {
    navigate('/contests/' , {state: {matchId:matchId}})
  }

  useEffect(() => {
    getMatches();
  }, []);



  return (
    <div className={styles.matches}>
      <Navbar />
      <div className={styles.matchesInfo}>
        <div className={styles.title}>All Matches</div>
        <div className={styles.matchesList}>
          {matches && matches.map((match,index) => {
            return(
                <div
                key={match.key}
            className={styles.match}
            onClick={() => {
              toContests(match.key);
            }}
          >
            <div className={styles.matchId}>Match ID {index+1}</div>
            <div className={styles.matchInfo}>
              <div className={styles.teams}>
                {match.short_name}
              </div>
              {/* <div className={styles.time}>30m:15s</div> */}
              <Timer clsName={styles.time} sec={(match["start_at"]["_seconds"]*1000)+match["start_at"]["_nanoseconds"]} />
            </div>
            <div className={styles.msP}>
              <div className={styles.teams}>Add Missing Players</div>
            </div>
            <div className={styles.cwl}>
              <div className={styles.teams}>Create Winning Logs</div>
            </div>
            <div className={styles.vwl}>
              <div className={styles.teams}>View Winning Logs</div>
            </div>
            <div className={styles.ub}>
              <div className={styles.teams}>Upload Banner</div>
            </div>
            <div className={styles.cp}>
              <div className={styles.teams}>Credit Players</div>
            </div>
          </div>
            );
          })}
        </div>
        <div className={styles.addMatch}>
          <div>
            <img src={plus} alt="plus" />
            <p>ADD MATCH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matches;
