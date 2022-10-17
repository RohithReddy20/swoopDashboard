import React from 'react';
import styles from "./Matches.module.css";
import logo from "../../images/swooplogo.svg";
import swoop from "../../images/swoop.svg";
import plus from "../../images/plus.svg";
import { useNavigate } from 'react-router-dom';

function Matches() {
    const navigate = useNavigate();
  return (
    <div className={styles.matches}>
        <div className={styles.header}>
            <div className={styles.logo}><img src={logo} alt="logo" /> <img src={swoop} alt="swoop" /></div>
            <p>DASHBOARD</p>
        </div>
        <div className={styles.matchesInfo}>
            <div className={styles.title}>All Matches</div>
            <div className={styles.matchesList}>
                <div className={styles.match} onClick={() => { navigate("/contests")}}>
                    <div className={styles.matchId}>Match ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>PAK <span>vs</span> IND</div>
                        <div className={styles.time}>30m:15s</div>
                    </div>
                </div>
                <div className={styles.match} onClick={() => { navigate("/contests")}}>
                    <div className={styles.matchId}>Match ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>PAK <span>vs</span> IND</div>
                        <div className={styles.time}>30m:15s</div>
                    </div>
                </div>
                <div className={styles.match} onClick={() => { navigate("/contests")}}>
                    <div className={styles.matchId}>Match ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>PAK <span>vs</span> IND</div>
                        <div className={styles.time}>30m:15s</div>
                    </div>
                </div>
                <div className={styles.match} onClick={() => { navigate("/contests")}}>
                    <div className={styles.matchId}>Match ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>PAK <span>vs</span> IND</div>
                        <div className={styles.time}>30m:15s</div>
                    </div>
                </div>
                <div className={styles.match} onClick={() => { navigate("/contests")}}>
                    <div className={styles.matchId}>Match ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>PAK <span>vs</span> IND</div>
                        <div className={styles.time}>30m:15s</div>
                    </div>
                </div>
            </div>
            <div className={styles.addMatch}>
            <div>
                <img src={plus} alt="plus" />
                <p>ADD MATCH</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Matches