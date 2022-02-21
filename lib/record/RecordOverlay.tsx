import { useState } from "react";

const RecordOverlay = () => {
  const [recording, setRecording] = useState(false);
  const [play, setPlay] = useState(false);

  const toggleRecording = () => {
    setRecording(!recording);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignContent: "space-around",
        paddingTop: 10,
      }}
    >
      <button
        id="record"
        style={{
          width: 100,
          height: 50,
          marginRight: 20,
        }}
        onClick={toggleRecording}
      >
        {!recording ? "Record" : "Pause"}
      </button>
      <button
        id="playRecord"
        style={{
          width: 100,
          height: 50,
          marginRight: 20,
        }}
        onClick={togglePlay}
      >
        {!play ? "Play" : "Pause"}
      </button>
    </div>
  );
};

export default RecordOverlay;
