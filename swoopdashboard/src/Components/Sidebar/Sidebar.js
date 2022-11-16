import { useEffect } from "react";

import styles from "./Sidebar.module.css";
import matchespng from "../../images/matchespng.png";
import userspng from "../../images/userspng.png";
import storage from "../../images/databasepng.png";

import { Link, useLocation } from "react-router-dom";


function Sidebar() {

    const location = useLocation();

    useEffect(() => {
        document.querySelectorAll(`.${styles.sidebarItem}`).forEach((item) => {
            item.classList.remove(`${styles.active}`)
        })
        if(location.pathname=="/matches") document.querySelector("[data-path='matches']").classList.add(styles.active);
        if(location.pathname=="/users") document.querySelector("[data-path='users']").classList.add(styles.active);
        if(location.pathname=="/storage") document.querySelector("[data-path='storage']").classList.add(styles.active)
    },[])

    const isActive = (e) => {
        document.querySelectorAll(`.${styles.sidebarItem}`).forEach((item) => {
            item.classList.remove(`${styles.active}`)
        })
        e.target.classList.add(`${styles.active}`);
      }



  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarItems}>
            <Link style={{textDecoration:"none"}} to="/matches"><div data-path="matches" onClick={isActive} className={styles.sidebarItem}>
                <img src={matchespng} alt="" />
                Matches
            </div></Link>
            <Link style={{textDecoration:"none"}} to="/users"> <div data-path="users" onClick={isActive} className={styles.sidebarItem}>
            <img src={userspng} alt="" />
               Users
            </div></Link>
            <Link style={{textDecoration:"none"}} to="/storage"><div data-path="storage" onClick={isActive} className={styles.sidebarItem}>
            <img src={storage} alt="" />
                Storage
            </div></Link>
        </div>
    </div>
  )
}

export default Sidebar