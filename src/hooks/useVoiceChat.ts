import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import connectSocket from "../utils/socket";

const useVoiceChat = () => {
  const connect = async () => {
    await navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const pc = new RTCPeerConnection();

        pc.ontrack = (e) => {
          if (e.track.kind === "audio") return;
        };
        stream.getTracks().forEach((track) => pc.addTrack(track));
        const socket = connectSocket("test");
        pc.onicecandidate = (e) => {
          if (!e.candidate) return;

          socket.send(JSON.stringify({ event: "candidate", data: JSON.stringify(e.candidate) }));
        };

        socket.on("close", (e) => console.log("socket closed", e));

        socket.on("massage", (e) => {
          const msg = JSON.parse(e.data);

          if (!msg) return console.log("failed to parse msg", e);

          switch (msg) {
            case "offer":
              const offer = JSON.parse(msg.data);
              if (!offer) return console.log("failed to parse answer");
              pc.setRemoteDescription(offer);
              pc.createAnswer().then((answer) => {
                pc.setLocalDescription(answer);
                socket.send(JSON.stringify({ event: "answer", data: JSON.stringify(answer) }));
              });
              return;
            case "candidata":
              const candidata = JSON.parse(msg.data);
              if (!candidata) return console.log("failed to parse answer");

              pc.addIceCandidate(candidata);
          }

          socket.on("error", (e) => console.log("ERROR", e.data));
        });
      })
      .catch((e) => console.log("falied to get user audio", e));
  };

  return { connect };
};

export default useVoiceChat;
