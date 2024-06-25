import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const theme = atom({
  key: "theme",
  default: "light",
  effects_UNSTABLE: [persistAtom],
});

export const useThemeStore = () => useRecoilState(theme);
export const useThemeValueStore = () => useRecoilValue(theme);
export const useSetThemeStore = () => useSetRecoilState(theme);
