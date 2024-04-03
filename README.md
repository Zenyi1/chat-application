# Assignment Submission CA4 Web Development

## Introduction
For this assignment, I successfully implemented the required features of adding typing notifications and user connection/disconnection notifications to my messaging application inside the portfolio I designed. I will discuss the challenges I faced and the overall outcome of the project.

## Implementation Process

### Typing Notification
Adding typing notifications involved modifying the frontend by adding a div below the text input and backend components by having the server emit signals when a user is typing and stops. This was the hardest part by far of the whoel project. On the backend, I developed logic to broadcast this notification to other users in the same chat room this was by emitting the specific signal alongside a list of the users from index.js and then adding event listeners on client.js and modifying the div based on if the list of typing users was empty or not. A bug that took me a while to figure out was making the message disappear after hitting enter, but that was fixed by adding a a socket.emit inside the event listener for submit. 

### User Connection/Disconnection Notifications
Implementing user connection/disconnection notifications also required changes to both frontend and backend components. I updated the frontend to send a notification to the server whenever a user connects or disconnects from the application. On the backend, I developed logic to broadcast these notifications to all users in the relevant chat rooms.


## Outcome
After overcoming the challenges and implementing the required features, our messaging application now provides a more interactive and engaging user experience. Users can see when others are typing and receive timely notifications about user activity within the chat rooms. These enhancements contribute to a richer communication experience and improve overall usability.


##Current Bugs
There's two major bugs, the first one is that if someone disconnects while typing they will always remain in the user is typing until you rerun the server, which shouldn't be an issue but its a corner case that I would fix given more time. 


## Conclusion
In conclusion, I successfully completed the assignment by adding typing notification and user connection/disconnection notifications to our messaging application. While I faced challenges during the implementation process, overcoming them led to valuable learning experiences and a more robust solution. These features enhance the functionality of our application and improve user engagement, demonstrating our commitment to delivering high-quality software solutions.

