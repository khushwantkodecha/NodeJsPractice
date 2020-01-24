const webSocketServer = require("ws").Server;
const WSS = new webSocketServer({ port: 1211 });

WSS.on("connection", ws => {
  console.log("we are connected");
  ws.on("message", message => {
    console.log(message);
    WSS.clients.forEach(client => {
      client.send(message);
    });
  });
});
