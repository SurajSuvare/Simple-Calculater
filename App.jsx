import Display from "./Componets/Display";
import ButtonContainer from "./Componets/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {

  const [calVal , setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText == "RESET"){
        setCalVal("");
    }
    else if(buttonText == "="){
        const result = eval(calVal);
        setCalVal(result);
    }
    else{
      const newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  }
  return (
    <div className={styles.calculater}>
      <Display showNum={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}


export default App;
