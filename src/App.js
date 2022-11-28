import './App.css';
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#27263b";
      showAlert("DarkMode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled ", "success");
    }
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="Text-Utils" Mode={Mode} toggleMode={toggleMode} />
      {/* <Navbar title="text-utils" /> */}
      <Alert alert={alert}/>
      {/* <div className="conainer my-3"> */}
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" Mode={Mode} />}/> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" Mode={Mode} />
        {/* </Routes> */}
      {/* </div> */}
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
