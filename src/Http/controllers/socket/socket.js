const socketIo = require("socket.io");

let io;

function setSocketIo(server) {
  io = socketIo(server, {
    cors: {
      origin: `${process.env.FRONTEND}`, // Sesuaikan dengan URL frontend Anda
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return io;
}

function getSocketIo() {
  // if (!io) {
  //   throw new Error("Socket.io not initialized!");
  // }

  return io;
}

module.exports = { setSocketIo, getSocketIo };
