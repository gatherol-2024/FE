import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const champSelectState = atom({
  key: "champSelect",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useChampSelectStore = () => useRecoilState(champSelectState);
export const useChampSelectValueStore = () => useRecoilValue(champSelectState);
export const useSetChampSelectStore = () => useSetRecoilState(champSelectState);

export const gameSessionState = atom({
  key: "gameSession",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useGameSessionStore = () => useRecoilState(gameSessionState);
export const useGameSessionValueStore = () => useRecoilValue(gameSessionState);
export const useSetGameSessionStore = () => useSetRecoilState(gameSessionState);
