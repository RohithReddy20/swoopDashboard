import styles from "./Navbar.module.css";
import logo from "../../images/swooplogo.svg";
import swoop from "../../images/swoop.svg";

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.header}>
            <div className={styles.logo}><img src={logo} alt="logo" /> <img src={swoop} alt="swoop" /></div>
            <p>DASHBOARD</p>
        </div>
    </div>
  )
}

export default Navbar