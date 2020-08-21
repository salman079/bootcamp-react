import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ReactDOM from "react-dom";
// import "./styles.css";

function App() {
  const[theme, setTheme] = React.useState("red");
  const onClickHandler = () => setTheme( theme === "red"? "blue": "red");
  
  return (
    <div className="App">
      <Text theme1={theme}/>
      <button onClick = {onClickHandler}>Change theme</button>
    </div>
  );
}
function Text({theme1}) {
  return(
    <h1 style = {{color: `${theme1}`}}>{theme1}</h1>
  );
  }
export default App;