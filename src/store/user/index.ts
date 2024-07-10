import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "user",
  default: {
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const useUserStore = () => useRecoilState(userState);
export const useUserValue = () => useRecoilValue(userState);
export const useSetUserStore = () => useSetRecoilState(userState);
