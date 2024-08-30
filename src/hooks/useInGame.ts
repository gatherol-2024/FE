import { useEffect, useState } from "react";
import isElectron from "../utils/isElectron";
import { IpcRendererEvent } from "electron";
import { useChampSelectStore, useGameSessionStore } from "../store/ingame";

const useInGame = () => {
  const [champSelect, setChampSelect] = useChampSelectStore();
  const [gameSession, setGameSession] = useGameSessionStore();

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
