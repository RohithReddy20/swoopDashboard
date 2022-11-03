import { useEffect } from 'react';
import styles from "./Contests.module.css";
import plus from "../../images/plus.svg";
import { useNavigate, useLocation} from "react-router-dom";
import prev from "../../images/prev.svg";
import Navbar from "../Navbar/Navbar"
import { useAuth } from '../../hooks/useAuth';

function Contests({}) {
    const navigate = useNavigate();
    const location = useLocation();
    const {contests, getContests} = useAuth();

    const toContest = (contest,index) => {
        navigate("/contest/", {state:{contest: contest,index:index}})
    }

    useEffect(() => {
        getContests(location.state.matchId);
        // console.log(location.state.matchId)
    },[location.state.matchId])

  return (
    <div className={styles.matches}>
        <div className={styles.header}>
        <img src={prev} alt="left" onClick={() => window.history.back()}/><Navbar />
        </div>
        <div className={styles.matchesInfo}>
            <div className={styles.title}>Active Contests</div>
            <div className={styles.matchesList}>
                {contests?.map((contest,index) => {
                    return(
                        <div className={styles.match} onClick={() => { toContest(contest,index) }}>
                    <div className={styles.matchId}>CONTEST Id {index+1} </div>
                    <div className={styles.matchInfo}>
                        <div className={styles.teams}>Join for {contest?.type==="paid" ? contest.entry_fees+"$": "FREE"}</div>
                        <div className={styles.time}>{contest.max_num_teams_allowed} spots</div>
                    </div>
                </div>
                    )
                })}
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