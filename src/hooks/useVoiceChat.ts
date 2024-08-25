import { useEffect, useState } from "react";

const useVoiceChat = () => {
  const [teamvoice, setTeamVoice] = useState<Map<string, MediaStreamTrack>>(new Map());

  const addTeamVoice = (id: string, track: MediaStreamTrack) => {
    setTeamVoice((prevTeamVoice) => {
      const updatedTeamVoice = new Map(prevTeamVoice);
      updatedTeamVoice.set(id, track);
      return updatedTeamVoice;
    });
  };

  const removeTeamVoice = (id: string) => {
    setTeamVoice((prevTeamVoice) => {
      const updatedTeamVoice = new Map(prevTeamVoice);
      updatedTeamVoice.delete(id);
      return updatedTeamVoice;
    });
  };

  const clearTeamVoice = () => setTeamVoice(new Map());
  const connect = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      const pc = new RTCPeerConnection();

      pc.ontrack = (e) => {
        const { kind, id } = e.track;
        if (kind === "video") return;
        addTeamVoice(id, e.track);
        e.streams[0].onremovetrack = ({ track }) => {
          removeTeamVoice(track.id);
        };
      };
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      const socket = new WebSocket("ws://localhost:8080/websocket");

      pc.onicecandidate = (e) => {
        if (!e.candidate) return;
        socket.send(JSON.stringify({ event: "candidate", data: JSON.stringify(e.candidate) }));
      };

      socket.onmessage = (e) => {
        const msg = JSON.parse(e.data);

        if (!msg) return console.log("failed to parse msg", e);

        switch (msg.event) {
          case "offer":
            const offer = JSON.parse(msg.data);
            if (!offer) return console.log("failed to parse offer");
            pc.setRemoteDescription(offer);
            pc.createAnswer().then((answer) => {
              pc.setLocalDescription(answer);
              socket.send(JSON.stringify({ event: "answer", data: JSON.stringify(answer) }));
            });
            return;
          case "candidate":
            const candidate = JSON.parse(msg.data);
            if (!candidate) return console.log("failed to parse candidate");
            pc.addIceCandidate(candidate);
            return;
        }
      };

      socket.onerror = (e) => console.log("ERROR", e);
      socket.onclose = (e) => console.log("socket closed", e);
    } catch (e) {
      console.log("failed to get user audio", e);
    }
  };

  return { teamvoice, connect };
};

export default useVoiceChat;
