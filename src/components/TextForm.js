import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces Successfully","success");
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="8"
            style={{
              backgroundColor: props.Mode === "dark" ? "#7d6b6a" : "white",
              color: props.Mode === "dark" ? "white" : "black",
              border : '2px solid grey'
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button
          type="submit"
          onClick={speak}
          id="toggle"
          className="btn btn-primary mx-1"
        >
          speak
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
