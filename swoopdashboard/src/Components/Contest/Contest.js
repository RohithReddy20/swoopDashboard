import styles from "./Contest.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import prev from "../../images/prev.svg";
import nfthand from "../../images/nfthand (1).png";
import coin from "../../images/Swoop xp coin1.png";

import Navbar from "../Navbar/Navbar";

function Contest() {
  const navigate = useNavigate();

  const location = useLocation();
  const contest = location.state.contest
  if(!contest?.entry_fees){
    contest["entry_fees"] = 0;
  }

  return (
    <div class={styles.contest}>
      {/* <div className={styles.header}>
        <img src={prev} alt="left" onClick={() => window.history.back()} />
        <Navbar />
      </div> */}
      <div className={styles.formL}>
        <div className={styles.contestName}> Contest Id {location.state.index+1}</div>
        <form className={styles.contestForm}>
          <div className={styles.nameFee}>
            <div className={styles.child}>
              <label htmlFor="contestName">Contest Name</label>
              <input
                value={contest.name}
                type="text"
                id="contestName"
                name="contestName"
              />
            </div>
            <div className={styles.child}>
              <label htmlFor="participationFee">
                Participation Fee{" "}
                <img style={{ height: "25px" }} src={nfthand} alt="nfthand" />
              </label>
              <input
                value={`${contest?.entry_fees ? contest.entry_fees:0} USDC`}
                type="text"
                id="participationFee"
                name="participationFee"
              />
            </div>
          </div>
          <div className={styles.keyNFT}>
            <div className={styles.child}>
              <label htmlFor="contestKey">Key</label>
              <input
                value="aainfi3b2ib3ibibi3bq3lorem"
                type="text"
                id="contestKey"
                name="contestKey"
                readOnly
              />
            </div>
            <div className={styles.child}>
              <label htmlFor="nftDiscount">NFT Owner Discount</label>
              <input
                value={`${(contest.entry_fees*contest.nft_owner_discount_percentage)/100} USDC`}
                type="text"
                id="nftDiscount"
                name="nftDiscount"
              />
            </div>
            <div className={styles.child}>
              <label
                style={{ display: "flex", alignItems: "center" }}
                htmlFor="xpDiscount"
              >
                Swoop XP Discount <img src={coin} alt="coin" />
              </label>
              <input
                value={`${(contest.entry_fees*contest.swoopxp_max_discount_percentage)/100} USDC`}
                type="text"
                id="xpDiscount"
                name="xpDiscount"
              />
            </div>
            <div className={styles.child}>
              <label htmlFor="stakers">Stakers</label>
              <input
                value="aainfi3b2ib3ibibi3bq3lorem"
                type="text"
                id="stakers"
                name="stakers"
                readOnly
              />
            </div>
          </div>
        </form>
        <div className={styles.lw}>
          <div
            className={styles.addMatch}
            onClick={() => {
              navigate("/leaderBoard");
            }}
          >
            <div>
              <p>LEADERBOARD</p>
            </div>
          </div>
          <div className={styles.winners}>WINNERS</div>
        </div>
      </div>
    </div>
  );
}

export default Contest;
