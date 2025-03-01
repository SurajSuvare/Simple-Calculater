import styles from "./Display.module.css";

const Display = ({ showNum }) => {
  return (
    <input className={styles.display} type="text" placeholder="Enter a number" value={showNum} readOnly />
  );
};

export default Display;
