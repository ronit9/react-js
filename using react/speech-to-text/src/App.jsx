import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";
import { FaMicrophone } from 'react-icons/fa';
import { FaStopCircle } from 'react-icons/fa';


const App = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  return (
    <div className="speech-container d-flex justify-content-center align-items-center">
      <div className="glass-box position-relative p-5">
        <div className="mic-icon mb-4">
         
        </div>

        <h2 className="mb-3">Speech to Text Converter</h2>
        <p className="text-muted">
          Speak something... it will automatically convert into text below.
        </p>

        <div className="main-content p-3 my-3">
          {transcript || <span className="text-secondary">Start speaking...</span>}
        </div>

        <div className="btn-style mt-4 d-flex gap-5 justify-content-center">
          <button className="btn btn-warning px-4 m-5 fw-bold" onClick={startListening}>
           <FaMicrophone className="me-2"/>Start Listening
          </button>
          <button className="btn btn-danger px-4 fw-bold" onClick={SpeechRecognition.stopListening}>
            <FaStopCircle className="bi bi-stop-circle me-2"></FaStopCircle>Stop Listening
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
