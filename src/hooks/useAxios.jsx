import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "https://swapi.dev/api/starships/";

const useAxios = (params) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData(baseUrl + params);
  }, [params]);

  return { loading, data };
};

export default useAxios;
