
import { useEffect, useState } from "react";


const useProcessStarshipList = (results, pageNumber) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    //if  pageNumber is not null, meaning Load more button has been clicked,
    //results array is an addition to the existing itemList
    //if pageNumber is null (first page), it means results array shows a new list of items
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
