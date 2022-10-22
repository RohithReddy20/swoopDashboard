import React, { useState } from "react";
import styles from "./Leaderboard.module.css";
import Credit from "./Credit";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';

import prev from "../../images/prev.svg";
import Navbar from "../Navbar/Navbar";

import Cstyles from "../Contest/Contest.module.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

function Winner() {
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
        <div className={styles.header}>
        <img src={prev} alt="left" onClick={() => window.history.back()} />
          <Navbar />
        </div>
        <div className={styles.winners}>WINNERS</div>
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
        <div className={styles.credit} onClick={handleOpenCredit}>CREDIT WINNERS</div>
        <Modal open={openCredit} onClose={handleCloseCredit}>
          <Box sx={style}>
          <Credit handleCloseCredit={handleCloseCredit} />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Winner;
