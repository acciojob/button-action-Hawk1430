import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [visible, setVisible] = useState(false);
  

  return (
    <div className="App" id="main">
      <button id="main" onClick={()=>setVisible(prev => !prev)}>Click To Show</button>
      <p className={ visible ? "show" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>

    </div>
  );
}

export default App
