import { io } from "socket.io-client";

const connectSocket = (namespace: string) => {
  return io(namespace, { transports: ["websocket"] });
};

export default connectSocket;
