import { useEffect, useState } from "react";

const useGetUserMedia = () => {
  const [audio, setAudio] = useState<MediaStream | null>(null);
  const [volume, setVolume] = useState(0);
  const FFTSIZE = 256;

  useEffect(() => {
    if (audio) {
      const audioContext = new window.AudioContext();
      const source = audioContext.createMediaStreamSource(audio);
      const analyzer = audioContext.createAnalyser();
      analyzer.fftSize = FFTSIZE;

      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      source.connect(analyzer);

      const interval = setInterval(() => {
        analyzer.getByteFrequencyData(dataArray);
        let values = 0;
        for (let i = 0; i < bufferLength; i++) values += dataArray[i];
        const average = (values / bufferLength) * 2;
        setVolume(average);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [audio]);

  const getUserAudio = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((audio) => setAudio(audio))
      .catch((err) => console.log(err));
  };

  return { getUserAudio, volume };
};

export default useGetUserMedia;
