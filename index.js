const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 3000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);

});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

//we use a set to store users, sets objects are for unique values of any type
const activeUsers = new Set();
//set of the typing users to send to client.js
const typingUsers = new Set();

io.on("connection", function (socket) {
  console.log("Made socket connection");

  socket.on("new user", function (data) {
    socket.userId = data;
    activeUsers.add(data);
    //... is the the spread operator, adds to the set while retaining what was in there already
    io.emit("new user", [...activeUsers]);
  });

  socket.on("disconnect", function () {
      activeUsers.delete(socket.userId);
      io.emit("user disconnected", socket.userId);
    });

    socket.on("chat message", function (data) {
      io.emit("chat message", data);
  });

  //the console log was to see if I was getting the usernames
  socket.on("typing", function () {
    typingUsers.add(socket.userId);
    console.log("Typing users:", [...typingUsers]);
    io.emit("typing", [...typingUsers]);
  });

  socket.on("stop typing", function () {
    typingUsers.delete(socket.userId);
    console.log("Typing users:", [...typingUsers]);
    io.emit("stop typing");
  });

});