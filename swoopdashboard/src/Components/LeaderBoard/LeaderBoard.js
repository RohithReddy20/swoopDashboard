import React, { useState } from "react";
import styles from "./Leaderboard.module.css";
import leftArrow from "../../images/leftArrow.svg";
import Credit from "./Credit";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

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
      <div className={styles.header}>
        <img src={leftArrow} alt="left" onClick={() => window.history.back()}/>
        Contest ID 1
      </div>
      <div className={styles.leaderBoardInfo}>
        <div className={styles.title}>LEADERBOARD</div>
        <div className={styles.participants}>
          <p>Last Updated:</p>
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
        <div className={styles.winners}>WINNERS</div>
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

export default LeaderBoard;
