import { useCallback, useState } from "react";

import { styled } from "@mui/material";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { RecordCircleIcon } from "../../assets";
import { Button } from "../UI/Button/Button";

type AudioRecorderWrapperProps = {
  record: string;
};

export const RecordSaying = () => {
  const recorderControls = useAudioRecorder();

  const [record, setRecord] = useState("stop");
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    //there can send url file to server
  };

  const onStartRecording = useCallback(() => {
    recorderControls.startRecording();
    setRecord("start");
  }, [recorderControls]);
  const onStopRecording = useCallback(() => {
    recorderControls.stopRecording();
    setRecord("next");
  }, [recorderControls]);

  const onNextHandler = useCallback(() => {
    console.log("next");
  }, []);

  const changeButton = useCallback(() => {
    if (record === "stop") {
      return (
        <Button variant="contained" onClick={onStartRecording}>
          RECORD NOW
        </Button>
      );
    }
    if (record === "start") {
      return (
        <Button variant="contained" onClick={onStopRecording}>
          STOP NOW
        </Button>
      );
    }
    if (record === "next") {
      return (
        <Button variant="contained" onClick={onNextHandler}>
          NEXT
        </Button>
      );
    }
  }, [record, onNextHandler, onStopRecording, onStartRecording]);

  return (
    <div>
      <AudioRecorderWrapper record={record}>
        <TitleWrapper>
          <RecordCircleIcon />
          <Title>RECORDING...</Title>
        </TitleWrapper>

        <AudioRecorder
          onRecordingComplete={addAudioElement}
          recorderControls={recorderControls}
          showVisualizer
        />
        {changeButton()}
      </AudioRecorderWrapper>
    </div>
  );
};
const AudioRecorderWrapper = styled("div")(({ record }: AudioRecorderWrapperProps) => ({
  ".test": {
    color: "red"
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& .audio-recorder": {
    display: record === "start" ? "block" : "none",
    "& img": {
      display: "none"
    },
    "& .audio-recorder-timer": {
      display: "none"
    }
  },
  "& .recording": {
    width: "0px",
    marginRight: "150px"
  }
}));
const TitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 8.5rem;
`;
const Title = styled("h2")(() => ({
  fontSize: "16px",
  lineHeight: "124%",
  letterSpacing: "0.075em",
  textTransform: "uppercase",
  color: "#3A10E5"
}));
