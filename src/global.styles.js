import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    /*colours*/
    --primary-100:#d6ebe7;
    --primary-200:#add6d0;
    --primary-300:#85c2b8;
    --primary-400:#5cada1;
   --primary-500: #339989;
   --primary-600: #297a6e;
   --primary-700:#1f5c52;
   --primary-800:#143d37;
   --primary-900:#0a1f1b;
 
  /*grey*/

  --grey-50:#F9FAFB;
  --grey-100:#F3F4F6   ;
  --grey-200: #E5E7EB  ;
  --grey-300:#D1D5DB   ;
  --grey-400: #9CA3AF  ;
 --grey-500: #6B7280   ;
 --grey-600: #4B5563   ;
 --grey-700: #374151  ;
 --grey-800: #1F2937   ;
 --grey-900: #111827  ;
  
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;


  /*fonts*/

--smalltext: 0.7em;

/*the rest*/
--backgroundColor: var(--grey-300);
--textColor: var(--grey-900);
--borderRadius: 0.25rem;
--letterSpacing: 1px;
--transition: 0.3s ease-in-out all;
--max-width: 1120px;
--fixed-width: 600px;

/* box shadow*/
--shadow-1: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-2:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-3:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-4:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

html { 
  background: url("images/bg.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color:  var(--grey-100);
}
body {
  margin: 0;
  background: var(--grey-100);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p {
  margin-bottom: 1.25rem;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--letterSpacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
a {
  text-decoration: none;
  color: black;
}
img {
  width: 100%;
  display: block;
}

@keyframes focus {
    0%   {border-left: 2px solid #ffffff;}
    25%  {border-left: 3px solid #ffe6e6;}
    50%  {border-left: 4px solid #ff8080;}
    100% {border-left: 5px solid #ff0000;}
}

@keyframes focus2 {
    0%   {border-left: 2px solid #ffffff;}
    25%  {border-left: 3px solid #fcefc7;}
    50%  {border-left: 4px solid #fee8a5;}
    100% {border-left: 5px solid #f6c225;}
}



`