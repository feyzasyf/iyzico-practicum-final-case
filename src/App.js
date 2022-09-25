import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import SingleStarship from "./routes/singleStarship/singleStarship";
import Header from "./components/header/header";
import {GlobalStyle} from "./global.styles";
import ErrorPage from "./routes/error/errorPage";

function App() {
  return (
    <> 
      
    <GlobalStyle/>
    <Routes>   
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="starship/:id" element={<SingleStarship />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
