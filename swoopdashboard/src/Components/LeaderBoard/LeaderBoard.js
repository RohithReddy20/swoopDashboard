import React, { useState } from "react";
import styles from "./Leaderboard.module.css";

import prev from "../../images/prev.svg";
import Navbar from "../Navbar/Navbar";

import Cstyles from "../Contest/Contest.module.css"


function LeaderBoard() {
  const [openCredit, setOpenCredit] = useState(false);
  const handleOpenCredit = () => {
    setOpenCredit(true);
  };
  const handleCloseCredit = () => {
    setOpenCredit(false);
  };

  return (
    <div className={`${styles.leaderBoard} leaderBoard`}>
      <div className={styles.lbh}>
        {/* <div className={styles.header}>
        <img src={prev} alt="left" onClick={() => window.history.back()} />
          <Navbar />
        </div> */}
        <div className={styles.title}>LEADERBOARD</div>
      </div>
      <div className={styles.leaderBoardInfo}>
      <div className={Cstyles.contestName}> Contest Id 1</div>
        <div className={styles.participants}>
          <div className={styles.participantsList}>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
            <div className={styles.participant}>
              <div className="name">#1 Manoj Bhadana</div>
              <div className="score">379.5</div>
            </div>
          </div>
        </div>
        <div style={{margin: "30px auto"}} className={styles.winners}>WINNERS</div>
      </div>
    </div>
  );
}

export default LeaderBoard;
