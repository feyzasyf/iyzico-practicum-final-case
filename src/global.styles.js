import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    /*colours*/
    
  --primary-100:#6e6f68   ;
  --primary-300:#56574f   ;
  --primary-400: #3e3f35  ;
 --primary-500: #26271c   ;
 --primary-600: #0e0f03  ;
 --primary-700: #0d0e03  ;
 --primary-800: #0b0c02   ;
 --primary-900: #0a0b02  ;
  
 
  /*grey*/ 

 --grey--50:#e7eef4
    --grey-100:#e2ebf2;
    --grey-200:#dde7f0;
    --grey-300:#d8e4ed;
    --grey-400:#d3e0eb;
   --grey-500: #cedde9;
   --grey-600: #b9c7d2;
   --grey-700:#a5b1ba;
   --grey-800:#909ba3;
   --grey-900:#7c858c;

  
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;


  /*fonts*/

--smalltext: 0.7em;

/*the rest*/
--backgroundColor: var(--grey-100);
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
  ${'' /* background: url("images/bg.jpg") no-repeat center top ;  */}
  ${'' /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */}
 background-size: 100% 160px;
  background-color:  var(--grey-100);
}
body {
  margin: 0;
  ${'' /* background: var(--grey-100); */}
  ${'' /* background: var(--backgroundColor); */}
  background-color: #ecf0f3;
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
    25%  {border-left: 3px solid #fcefc7;}
    50%  {border-left: 4px solid #fee8a5;}
    100% {border-left: 5px solid #f6c225;}
}



`