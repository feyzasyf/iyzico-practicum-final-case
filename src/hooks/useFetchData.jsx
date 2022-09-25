import  { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "https://swapi.dev/api/starships/";

const useFetchData = (params) => {
  const { searchTerm, pageNumber, id } = params;
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);

  const urlLink = id ? baseUrl + id : baseUrl;

  useEffect(() => {
    
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: urlLink,
      params: { search: searchTerm, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const { data } = res;
        setResponse(data);      
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

      //cleanup function
    return () => cancel();
  }, [searchTerm, pageNumber]);

  return { loading, response, error };
};

export default useFetchData;
