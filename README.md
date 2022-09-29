# İyzico Front End Practicum Final Case
# Star Wars Starship Database


This is a React App project that was bootstrapped with Create React App, consuming external API : [SWAPI]( https://swapi.dev/).

## Getting Started
Clone this repo : `git clone https://github.com/feyzasyf/iyzico-practicum-final-case.git`

Navigate to the root folder and install all dependencies :

    `yarn or npm install`

Start Development Mode :

    `yarn start or npm start`
    
   Open http://localhost:3000 to view it in the browser.
   
   
## How to use the app
 
 This project lists all the starships available in SWAPI.
 You can search among starships by their name or model, and access the detail page about each starship by clicking on the relevant starship card.
 
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
