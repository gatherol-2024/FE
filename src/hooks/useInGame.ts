import { useEffect, useState } from "react";
import isElectron from "../utils/isElectron";
import { IpcRendererEvent } from "electron";

const useInGame = () => {
  const [champSelect, setChampSelect] = useState();
  const [gameSession, setGameSession] = useState();

  useEffect(() => {
    if (isElectron()) {
      const handleChampSelect = (_: IpcRendererEvent, data: any) => {
        setChampSelect(data);
      };

      const handleGameSession = (_: IpcRendererEvent, data: any) => {
        setGameSession(data);
      };

      window.electronAPI.getChampSelect(handleChampSelect);
      window.electronAPI.getGameSession(handleGameSession);

      return () => {
        window.electronAPI.removeChampSelectListener(handleChampSelect);
        window.electronAPI.removeGameSessionListener(handleGameSession);
      };
    }
  }, []);

  return { champSelect, gameSession };
};

export default useInGame;
