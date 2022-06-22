const connect = (socket: WebSocket) => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg: any) => {
    console.log(msg);
  };

  socket.onclose = (event: any) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error: any) => {
    console.log("Socket Error: ", error);
  };
};

const sendMsg = (socket: WebSocket, msg: string) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };