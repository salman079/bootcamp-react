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
      <h1 style = {{color: `purple`}}> this is testing </h1> 
      <Text theme1={theme}/>
      <button onClick = {onClickHandler}>Change theme</button>
    </div>
  );
}
function Text({theme1}) {
  return(
    <h1 style = {{color: `${theme1}`}}>Text in {theme1} color </h1>
  );
  }
export default App;