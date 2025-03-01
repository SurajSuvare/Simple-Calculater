import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) =>{

    let buttonNames = ["7","8","9","DLE","4","5","6","+","1","2","3","-",".","0","/","*"];

    return <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) =>(
               <button key={buttonName} className={styles.calButton} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
        ))}
        <button type="button" id={styles.bigbtn} className="btn btn-secondary">RESET</button>
        <button type="button" id={styles.bigbtn} className="btn btn-success">=</button>
    </div>
}

export default ButtonContainer;