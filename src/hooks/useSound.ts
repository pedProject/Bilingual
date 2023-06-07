import { useEffect, useState } from "react";

export const useSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  useEffect(() => {
    if (!audio) return undefined;
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio?.pause();
    };
  }, [audio]);

  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
  }, [isPlaying, audio]);

  const togglePlayerHandler = () => setIsPlaying((prevPlaying) => !prevPlaying);

  const stop = () => setIsPlaying(false);

  return {
    audio,
    isPlaying,
    togglePlayerHandler,
    setAudio,
    stopAudio: stop
  };
};
