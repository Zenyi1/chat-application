# Assignment Submission CA4 Web Development

## Introduction
For this assignment, I successfully implemented the required features of adding typing notifications and user connection/disconnection notifications to my messaging application inside the portfolio I designed. I will discuss the challenges I faced and the overall outcome of the project.

## Implementation Process

### Typing Notification
Adding typing notifications involved modifying the frontend by adding a div below the text input and backend components by having the server emit signals when a user is typing and stops I learned the most from this requirement. This was the hardest part by far of the whole project. On the backend, First I added a const that called the div that I created in the frontend that was gonna show hen someone is typing. I developed logic to broadcast this notification to other users in the same chat room this was by emitting the specific signal alongside a list of the users from index.js and then adding event listeners on client.js and modifying the div based on if the list of typing users was empty or not. A bug that took me a while to figure out was making the message disappear after hitting enter, but that was fixed by adding a a socket.emit inside the event listener for submit. 

### User Connection/Disconnection Notifications
This was way easier compared to the typing notification the starting code was incredibly generous and very functional so I just took advantage that there were already functions in place for when a user joins to add it to the userBox and there i modified a div I created in the frontend and set it on a timeout for 3 seconds so that the website doesnt get all cluttered. Then I did the same thing for when a user disconnects inside the socket already defined for it. A challenge I had was that teh user joining notifications was only showing in the screen of the person who joined, but this was because I was calling the display notification function inside of the createNewUser instead of on the socket that for a new user and after calling it there the issue was fixed. 


## Outcome
After making all these changes the chat application was working perfectly. If I had more time I have more improvements I am gonna add after the assignment like styling of the chat section although I like the current one. I also want to allow the user to choose a username instead of getting a random one assigned, but the deadline is approaching and I don't want to mess up my code because the couple attempts that I had completely destroy everything since both the typing and the user joining rely on the list of usernames. But other than that I am very satisfied with how the project turned out, and I left a couple of easter eggs I hope the grader enjoys.


##Current Bugs
There's One major bug that you probably won't find when you check the assignment as it is very tricky to create. It shows when someone disconnects while typing they will always remain in the user is typing until you rerun the server, so whenever someone else types, he would be in the list of people currently typing which should not be an issue but its a corner case that I would fix given more time. This is resolved by restarting the server, and if no one disconnects while typing it will not show up. 


## Conclusion
In conclusion, I successfully completed the assignment by adding typing notification and user connection/disconnection notifications to the messaging application, plus I also styled my portfolio website and added a button to download my resume I plan on polishing this and hosting it on heroku when I buy the domain zenyi.com . While I faced challenges during the implementation process, overcoming them led to valuable learning experiences. I had fun in this assignment by implementing the features and learned a ton. If anything I would like the starter code to be less in depth so that I have to implement the chat application as well.

