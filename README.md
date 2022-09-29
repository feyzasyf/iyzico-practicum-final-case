# İyzico Front End Practicum Final Case
# Star Wars Starship Database


This is a React App project that was bootstrapped with Create React App, consuming external API : [SWAPI]( https://swapi.dev/).

See the project LIVE: [Demo Starship Database](https://tiny-kheer-9935b9.netlify.app/)

## Getting Started
Clone this repo : `git clone https://github.com/feyzasyf/iyzico-practicum-final-case.git`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn start` or `npm start`
    
 Open http://localhost:3000 to view it in the browser.
 The page will reload if you make edits.
You will also see any lint errors in the console.

Run Unit Tests:

- `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
   
   
## How to use the app
 
 On the home page you can see the list of all the starships available in SWAPI, [starships endpoint](https://swapi.dev/api/starships/).<br>
You can search among starships by their name or model, and access the details of each starship by clicking on the relevant starship card by being redirected to the single starship detail page.
 
## Libraries and Technologies used in the app
 
  - This app is styled with Styled Components
  - Context API is used for for state management
  - Axios is used for API requests
  - React Router v6 is used for routing
      
 ## Folder Structure
     |-- src/
         |-- assets/
             |-- starshipImages/
         |-- components/
         |-- context/
         |-- hooks/
         |-- routes/
         |-- utils/
    
         |-- App.js
         |-- globalStyles.js/       
         |-- index.js
         |-- reportWebVitals.js
         |-- setupTests.js

- `assets` : Folder to put assets like logos and images
- `components` : Folder to put all components with their tests and styles
- `context`: Folder for the AppContext
- `hooks` : Folder to put custom hooks
- `routes` : Folder for pages
- `utils` : Folder to put helper/utility functions
- `globalStyles.js` : Js file to provide global styling for our styled components
