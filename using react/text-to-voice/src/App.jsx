import { useEffect, useState, useRef } from "react";
import './App.css'; // Import your custom CSS file

function App() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const inputRef = useRef();
  const utteranceRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      if (allVoices.length > 0) {
        setVoices(allVoices);
      } else {
        setTimeout(loadVoices, 100);
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = () => {
    const text = inputRef.current.value;
    if (!text.trim()) return;
    const speech = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) speech.voice = voice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
    utteranceRef.current = speech;
    setIsPaused(false);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPaused(false);
  };

  const resume = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const pause = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="container app-container">
      <h2 className="text-center">Text to Speech</h2>
      <textarea
        ref={inputRef}
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        className="form-control text-area"
      />
      <br />
      <select
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
        className="form-select voice-select"
      >
        <option value="">Select Voice</option>
        {voices.map((v, i) => (
          <option key={i} value={v.name}>
            {v.name} ({v.lang})
          </option>
        ))}
      </select>
      <br /><br />
      <div className="button-container d-flex justify-content-center">
        <button onClick={speak} disabled={!inputRef.current?.value.trim()} className="btn btn-primary mx-2">
          Speak
        </button>
        <button onClick={pause} style={{ marginLeft: "10px" }} className="btn btn-warning mx-2">
          Pause
        </button>
        <button onClick={resume} style={{ marginLeft: "10px" }} className="btn btn-success mx-2">
          Resume
        </button>
        <button onClick={stop} style={{ marginLeft: "10px" }} className="btn btn-danger mx-2">
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
