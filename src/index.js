import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Uploader from "./UploaderPreview";

function App() {
  return (
    <div className="App">
      <h1>try Dropzone Uploader</h1>
      <Uploader />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
