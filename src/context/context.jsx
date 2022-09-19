import { createContext, useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const urlParams = (searchTerm && `?search=${searchTerm}`) || "";
  const { loading, data, error } = useAxios(urlParams);
  const starships = data.results;

  const value = { starships, searchTerm, setSearchTerm };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
