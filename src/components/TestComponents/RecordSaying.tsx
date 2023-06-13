import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
export const RecordSaying = () => {
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  return (
    <div>
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true
        }}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <button onClick={recorderControls.startRecording}>Start recording</button>
    </div>
  );
};
