import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to React Laboratory!</h1>
      <div>
        <Link className={styles.link} to={`/to-do-list`}>
          To Do List!
        </Link>
        <Link className={styles.link} to={`/coin-tracker`}>
          Coin Tracker!
        </Link>
      </div>
    </div>
  );
}

export default Home;
