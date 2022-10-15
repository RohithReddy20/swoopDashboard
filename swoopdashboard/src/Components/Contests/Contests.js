import React from 'react';
import styles from "./Contests.module.css";
import plus from "../../images/plus.svg";
import leftArrow from "../../images/leftArrow.svg";

function Contests() {
  return (
    <div className={styles.matches}>
        <div className={styles.header}>
            <img src={leftArrow} alt="left" />Match ID 1
        </div>
        <div className={styles.matchesInfo}>
            <div className={styles.title}>Active Contests</div>
            <div className={styles.matchesList}>
                <div className={styles.match}>
                    <div className={styles.matchId}>Contest ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>Join for Free</div>
                        <div className={styles.time}>6000 spots</div>
                    </div>
                </div>
                <div className={styles.match}>
                    <div className={styles.matchId}>Contest ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>1 DOLLAR SWOOP</div>
                        <div className={styles.time}>6000 spots</div>
                    </div>
                </div>
                <div className={styles.match}>
                    <div className={styles.matchId}>Contest ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>1 DOLLAR KA 2 DOLLAR</div>
                        <div className={styles.time}>6000 spots</div>
                    </div>
                </div>
                <div className={styles.match}>
                    <div className={styles.matchId}>Contest ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>Join for Free</div>
                        <div className={styles.time}>6000 spots</div>
                    </div>
                </div>
                <div className={styles.match}>
                    <div className={styles.matchId}>Contest ID 1</div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>Join for Free</div>
                        <div className={styles.time}>6000 spots</div>
                    </div>
                </div>
            </div>
            <div className={styles.addMatch}>
            <div>
                <img src={plus} alt="plus" />
                <p>ADD CONTEST</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contests