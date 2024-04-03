//required for front end communication between client and server

const socket = io();

const inboxPeople = document.querySelector(".inbox__people");
const typingNotification = document.querySelector(".typing_notification");
const joinLeave = document.querySelector(".joinleave");


let userName = "";
let id;



const newUserConnected = function (data) {
    //give the user a random unique id
    id = Math.floor(Math.random() * 1000000);
    userName = 'user-' +id;
    //console.log(typeof(userName));   
    

    //emit an event with the user id
    socket.emit("new user", userName);
    //call
    addToUsersBox(userName);

    joinLeave.innerHTML = `${userName} has joined`;
    //I add this to make it dissapear after 3 seconds
    setTimeout(() => {
      joinLeave.innerHTML = "";
    }, 3000);
};

const addToUsersBox = function (userName) {
    //This if statement checks whether an element of the user-userlist
    //exists and then inverts the result of the expression in the condition
    //to true, while also casting from an object to boolean
    if (!!document.querySelector(`.${userName}-userlist`)) {
        return;
    
    }
    
    //setup the divs for displaying the connected users
    //id is set to a string including the username
    const userBox = `
    <div class="chat_id ${userName}-userlist">
      <h5>${userName}</h5>
    </div>
  `;
    //set the inboxPeople div with the value of userbox
    inboxPeople.innerHTML += userBox;
};

//call 
newUserConnected();

//when a new user event is detected
socket.on("new user", function (data) {
  data.map(function (user) {
          return addToUsersBox(user);
      });
});

//when a user leaves
socket.on("user disconnected", function (userName) {
  document.querySelector(`.${userName}-userlist`).remove();

  joinLeave.innerHTML = `${userName} has left`;
  setTimeout(() => {
    joinLeave.innerHTML = "";
  }, 3000);
});


const inputField = document.querySelector(".message_form__input");
const messageForm = document.querySelector(".message_form");
const messageBox = document.querySelector(".messages__history");

const addNewMessage = ({ user, message }) => {
  const time = new Date();
  const formattedTime = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });

  const receivedMsg = `
  <div class="incoming__message">
    <div class="received__message">
      <p>${message}</p>
      <div class="message__info">
        <span class="message__author">${user}</span>
        <span class="time_date">${formattedTime}</span>
      </div>
    </div>
  </div>`;

  const myMsg = `
  <div class="outgoing__message">
    <div class="sent__message">
      <p>${message}</p>
      <div class="message__info">
        <span class="time_date">${formattedTime}</span>
      </div>
    </div>
  </div>`;

  //is the message sent or received
  messageBox.innerHTML += user === userName ? myMsg : receivedMsg;
};


messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputField.value) {
    return;
  }

  socket.emit("chat message", {
    message: inputField.value,
    nick: userName,
  });

  //to stop it from showing after sending
  socket.emit("stop typing")

  inputField.value = "";
});

inputField.addEventListener("input", () => {
  if (inputField.value.trim() !== "") {
      socket.emit("typing");
  } else {
      socket.emit("stop typing");
  }
});

socket.on("chat message", function (data) {
  addNewMessage({ user: data.nick, message: data.message });
});


socket.on("typing", function (typingUsers) {
  // Display typing notification
  if (typingUsers.length > 0) {
    const typingUsernames = typingUsers.join(", ");
    //displays the username f someone is typing and theres an inline if statement to check if more than 1 user is typing and switch to are typing
    typingNotification.innerHTML = `${typingUsernames} ${typingUsers.length > 1 ? 'are typing...' : 'is typing...'}`;
  } else {
    // Clear typing notification if no one is typing
    typingNotification.innerHTML = "";
  }
});

//Make the div disappear if no one is typing
socket.on("stop typing", function () {
    typingNotification.innerHTML = "";
});

