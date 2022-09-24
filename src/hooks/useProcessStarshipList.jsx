
import { useEffect, useState } from "react";


const useProcessStarshipList = (results, pageNumber) => {
  const [itemList, setItemList] = useState([]);
console.log("useProcessStarshipList called")
  useEffect(() => {
    if (pageNumber) {
      setItemList((prevData) => {
        return [...prevData, ...results];
      });
    } else {
      if (results) setItemList(results);
    }
  }, [results]);

  return { itemList };
};

export default useProcessStarshipList;
