import { IpcRenderer } from "electron";

export interface IElectronAPI {
  getGameSession: any;
  getChampSelect: any;
  ipcRenderer: any;
  removeChampSelectListener: any;
  removeGameSessionListener: any;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

export {};
