import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const themeState = atom({
  key: "theme",
  default: "light",
  effects_UNSTABLE: [persistAtom],
});

export const useThemeStore = () => useRecoilState(themeState);
export const useThemeValueStore = () => useRecoilValue(themeState);
export const useSetThemeStore = () => useSetRecoilState(themeState);
