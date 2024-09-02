import { useEffect, useState } from "react";
import { useDeviceStore } from "../store/devices";

const useDevices = () => {
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [outputDevices, setOutputDevices] = useState<MediaDeviceInfo[]>([]);
  const [device, setDevice] = useDeviceStore();
  const getDevices = async () => {
    const newDevices = await navigator.mediaDevices.enumerateDevices();
    console.log(newDevices);
    const audioInputs = newDevices.filter((device) => device.kind == "audioinput");
    setInputDevices(audioInputs);

    const audioOutputs = newDevices.filter((device) => device.kind == "audiooutput");
    setOutputDevices(audioOutputs);

    if (!device.input && audioInputs.length > 0) {
      setDevice((prev: any) => ({ ...prev, input: audioInputs[0] }));
    }

    if (!device.output && audioOutputs.length > 0) {
      setDevice((prev: any) => ({ ...prev, output: audioOutputs[0] }));
    }
  };

  useEffect(() => {
    getDevices();
  }, []);

  return { inputDevices, outputDevices };
};

export default useDevices;
