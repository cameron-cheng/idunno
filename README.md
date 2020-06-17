# iDUNNO ¯\ _ (ツ) _ /¯
#### Contributors: [Cameron Cheng](https://github.com/cameron-cheng), [Amy Bartels](https://github.com/akbartels), and [Jeremy Nasato](https://github.com/JNasato)

## Summary
iDUNNO is a native app that utilizes Tinder-style swiping mechanics to help users pick a restaurant when they need help making a decision. This app is especially useful for couples or groups of friends when deciding where to go out to eat. 

After the host user creates a session with chosen filters, it makes a request to the Google Places API that responds with the filtered restaurants. The users swipe left or right depending on if they want to choose the restaurant, and the app then displays the winning result based on whichever restaurant matches the most. 

## Screenshots
!["Home Page of app"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_Home.png)
!["Main Filters to customize session"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_Filters1.png)
!["Additional Filters"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_Filters2.png)
!["Invitation page where user shares decision code"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_Invitation.png)
!["Lobby page to see other users in room"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_Lobby.png)
!["Card swiping page with example restaurant"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_SwipeCards.png)
!["Result page with winning result"](https://raw.githubusercontent.com/cameron-cheng/idunno/master/app/src/assets/screenshots/iDUNNO_Result.png)

## Features
- Users can create a session with specified filters such as area, radius, price level and various restaurant and cuisine types.
- Host users can share the 'decision code' with guest users and guest users can input the code to join the same session room.
- Host users can start the session from the lobby page.
- The app makes a Google Places API request based on the filters set by the host, and returns a list of restaurants to be decided upon by the users.
- Users can swipe left or right depending on if they would like to see that particular restaurant picked.
- After a set time limit, the app displays a winning result to all users that corresponds to the most-chosen restaurant.
- The result card includes detailed information such as a link to the website and it's location on Google Maps.

## Future Goals
- Extend the app to include various activities other than eating at restaurants.
- Display the proximity from the user to the restaurant on the restaurant cards.
- Set the Google Maps link to automatically set the directions to the restaurant.
- Properly deploy the iDUNNO app onto the App Store!

## Tech Stack
#### Back-end
- NodeJS
- Express
- Socket.IO

#### Front-end
- React Native
- React-Router-Native
- React-Native-Elements
- Native-Base
- Lottie
- Axios
- Socket.IO-Client

## Getting Started
This application requires **TWO** servers to run! Clone this repository to your desired directory and navigate to the directory.
### Server-Side
1. `cd server`
2. `npm install` or `yarn`
3. `cp .env.example .env`
4. Update the .env file in the server directory with your own API key.
5. `npm start` 

### Client-Side
1. `cd app`
2. `npm install` or `yarn`
3. `cp .env.example .env`
4. Update the .env in the app directory with your own API key (same as above) and IP address.
5. `expo start`
6. Open expo app on your mobile device or mobile simulator.

## Dependencies
- NodeJS
- Express
- DotENV
- Nodemon
- Socket.IO
- Socket.IO-Client
- Axios
- Expo
- Lottie
- React
- React-Router-Native
- React-Native-Elements
- React-Native-Gesture-Handler
- React-Native-Reanimated
- React-Native-Ratings
- React-Native-Snap-Carousel
- Native-Base


