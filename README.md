# Movie-App (WatchMonkey)

## Description
This is a movie app with an UI, that is like Netflix and more (can give movie suggestions using openAI API). It is built using React Js, tailwindcss, firebase and redux-toolkit for state-management. Also APIs like tmdb API and openAI API has been integrated in the project.
<div style="display: flex; justify-content: space-between;">
<img src="https://github.com/Arwolfe07/Movie-app/blob/master/screenshots/w_1.png" alt="Img" width="45%"></img>
<img src="https://github.com/Arwolfe07/Movie-app/blob/master/screenshots/w_2.png" alt="Img" width="45%"></img>
</div>
<div style="display: flex; justify-content: space-between;">
<img src="https://github.com/Arwolfe07/Movie-app/blob/master/screenshots/w_3.png" alt="Img" width="45%"></img>
<img src="https://github.com/Arwolfe07/Movie-app/blob/master/screenshots/w_4.png" alt="Img" width="45%"></img>
</div>

## Features
* Authentication:
    * User can create an account by providing their email address, name and password.
    * Firebase authentication has been used for this project.
    * Firebase is used to store the user credentials.

* Movie-App UI:
    * UI has been made almost similar to Netflix app.
    * The home page displays a list of movies with posters.
    * The top section of page plays a movie trailer.

* Chat-GPT Integration:
    * Open AI API has been integrated in the app.
    * This gives movie recommendation for queries like action movies, trending movies, etc.

 * Responsive UI for different screen sizes.

 ## Note
 * This project contains some info (.env file) that has been hidden for security purposes so please enter your credentials on cloning the repo.
 * The open AI search feature will not work as API key is now paid version. If you have an Open AI API key then in your .env file add REACT_APP_OPEN_AI_KEY = "Your Key" for watching how the feature works.

 ## Installation & Usage Instructions
Run the following command on your terminal
```sh
git clone https://github.com/Arwolfe07/Movie-app.git
```
After this go to root directory and run
```sh
npm install
```
Now create a .env file and create REACT_APP_OPEN_AI_KEY variable. Now run
```sh
npm start
```
There commands will install all the required dependencies and start running your code on local environment.

## Technologies used
1. [ReactJS](https://react.dev/) - A JavaScript library for building user interfaces
2. [@redux/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) - The official, opinionated, batteries-included toolset for efficient Redux development
3. [tailwindcss](https://tailwindcss.com/) - Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.
2. [Firebase](https://firebase.google.com/) - Backend as a Service, firebase is an app development platform that helps you build and grow apps and games users love.


