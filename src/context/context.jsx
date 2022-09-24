import { createContext, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import useProcessStarshipList from "../hooks/useProcessStarshipList";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState("");


  const { loading, response, error } = useFetchData({searchTerm, pageNumber}); 
  const { results, next } = response;


  const { itemList } = useProcessStarshipList(results, pageNumber);
console.log("context is called")

  const value = {
    itemList,
    next,
    searchTerm,
    setSearchTerm,
    setPageNumber,
    pageNumber,
    loading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
