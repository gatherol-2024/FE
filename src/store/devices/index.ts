import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const deviceState = atom({
  key: "devices",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useDeviceStore = () => useRecoilState(deviceState);
export const useDeviceValueStore = () => useRecoilValue(deviceState);
export const useSetDeviceStore = () => useSetRecoilState(deviceState);
