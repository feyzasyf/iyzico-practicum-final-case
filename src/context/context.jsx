import { createContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://swapi.dev/api/starships";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [starships, setStarships] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios(url);
      console.log(data.results);
      setStarships(data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const value = { starships };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
