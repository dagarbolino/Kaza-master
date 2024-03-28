import { useEffect, useState } from 'react';

const baseUrl = process.env.PUBLIC_URL + '/data.json';

export function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json()) 
      .then((data) => { 
        // console.log(data);
        setData(data); //nous set les data dans le state
      });
  }, []);

  return data;
}