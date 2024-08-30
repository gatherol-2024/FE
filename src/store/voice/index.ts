import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const VOICE_DEFAULT = {
  mic: true,
  headset: true,
};

export const voiceState = atom({
  key: "voice",
  default: VOICE_DEFAULT,
  effects_UNSTABLE: [persistAtom],
});

export const useVoiceStore = () => useRecoilState(voiceState);
export const useVoiceValue = () => useRecoilValue(voiceState);
export const useSetVoiceStore = () => useSetRecoilState(voiceState);
