import { IpcRenderer } from "electron";

export interface IElectronAPI {
  test: any;
  ipcRenderer: any;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

export {};
