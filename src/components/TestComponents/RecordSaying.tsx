import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { Button } from "../UI/Button/Button";
export const RecordSaying = () => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    // document.body.appendChild(audio);
  };

  return (
    <div>
      <AudioRecorder onRecordingComplete={addAudioElement} recorderControls={recorderControls} />
      <Button variant="contained" onClick={recorderControls.startRecording}>
        Start recording
      </Button>
      <Button variant="contained" onClick={recorderControls.stopRecording}>
        Stop recording
      </Button>
    </div>
  );
};
