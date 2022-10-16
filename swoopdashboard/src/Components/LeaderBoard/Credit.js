import React from 'react';
import styles from "./Leaderboard.module.css";

function Credit({handleCloseCredit}) {
  return (
    <div className={styles.creditConfirmation}>
        <div className={styles.confirm}>Confirmation</div>
        <div className={styles.note}>Credit Amounts to All Player's Swoop Wallets Now?</div>
        <div className={styles.creditB}>
        <button className={styles.creditPlayer}>CREDIT PLAYERS</button>
        <button className={styles.cancel} onClick={handleCloseCredit}>TAKE ME BACK</button>
        </div>
    </div>
  )
}

export default Credit