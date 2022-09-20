import { createContext, useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState('');


  let urlParams = "";
  if (searchTerm) {
    urlParams = `?search=${searchTerm}`;
    if (pageNumber) urlParams = `${urlParams}&page=${pageNumber}`;
  } else if (pageNumber) {
    urlParams = `?page=${pageNumber}`;
  }



  const { loading, data } = useAxios(urlParams);


  const value = { data, searchTerm, setSearchTerm, setPageNumber, pageNumber, loading };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
