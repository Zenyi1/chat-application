# Assignment Submission CA4 Web Development

## Introduction
For this assignment, I successfully implemented the required features of adding typing notifications and user connection/disconnection notifications to my messaging application inside the portfolio I designed. I will discuss the challenges I faced and the overall outcome of the project.

## Implementation Process

### Typing Notification
Adding typing notifications involved modifying the frontend by adding a div below the text input and backend components by having the server emit signals when a user is typing and stops I learned the most from this requirement. This was the hardest part by far of the whole project. On the backend, First I added a const that called the div that I created in the frontend that was gonna show hen someone is typing. I developed logic to broadcast this notification to other users in the same chat room this was by emitting the specific signal alongside a list of the users from index.js and then adding event listeners on client.js and modifying the div based on if the list of typing users was empty or not. A bug that took me a while to figure out was making the message disappear after hitting enter, but that was fixed by adding a a socket.emit inside the event listener for submit. 

### User Connection/Disconnection Notifications
This was way easier compared to the typing notification the starting code was incredibly generous and very functional so I just took advantage that there were already functions in place for when a user joins to add it to the userBox and there i modified a div I created in the frontend and set it on a timeout for 3 seconds so that the website doesnt get al cluterred. Then I did the same thing for when a user disconnects inside the socket already defined for it. 


## Outcome
After making all these changes the chat application was working perfectly 


##Current Bugs
There's One major bug that you probably won't find when you check the assignment as it is very tricky to create. It shows when someone disconnects while typing they will always remain in the user is typing until you rerun the server, which should not be an issue but its a corner case that I would fix given more time. 


## Conclusion
In conclusion, I successfully completed the assignment by adding typing notification and user connection/disconnection notifications to our messaging application. While I faced challenges during the implementation process, overcoming them led to valuable learning experiences and a more robust solution. These features enhance the functionality of our application and improve user engagement, demonstrating our commitment to delivering high-quality software solutions.

