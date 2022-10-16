import React from "react";
import styles from "./Contest.module.css";
import leftArrow from "../../images/leftArrow.svg";

function Contest() {
  return (
    <div class={styles.contest}>
      <div className={styles.header}>
        <img src={leftArrow} alt="left" />
        Contest ID 1
      </div>
      <div className={styles.formL}>
          <form className={styles.contestForm}>
            <div className={styles.nameFee}>
                <div className={styles.child}>
                    <label htmlFor="contestName">Contest Name</label>
                    <input type="text" id="contestName" name="contestName" />
                </div>
                <div className={styles.child}>
                    <label htmlFor="participationFee">Participation Fee</label>
                    <input type="text" id="participationFee" name="participationFee" />
                </div>
            </div>
            <div className={styles.keyNFT}>
                <div className={styles.child}>
                    <label htmlFor="contestKey">Key</label>
                    <input type="text" id="contestKey" name="contestKey" />
                </div>
                <div className={styles.child}>
                    <label htmlFor="nftDiscount">NFT Owner Discount</label>
                    <input type="text" id="nftDiscount" name="nftDiscount" />
                </div>
                <div className={styles.child}>
                    <label htmlFor="xpDiscount">Swoop XP Discount</label>
                    <input type="text" id="xpDiscount" name="xpDiscount" />
                </div>
                <div className={styles.child}>
                    <label htmlFor="stakers">Stakers</label>
                    <input type="text" id="stakers" name="stakers" />
                </div>
            </div>
          </form>
          <div className={styles.addMatch}>
                <div>
                    <p>LEADERBOARD</p>
                </div>
            </div>
            <div className={styles.winners}>
                WINNERS
            </div>
      </div>
    </div>
  );
}

export default Contest;
