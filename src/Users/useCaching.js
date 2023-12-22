import { useEffect, useState } from 'react';

export default function useCaching(nomCaching, fnFetch) {
  let [data, setData] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem(nomCaching)) {
      setData(JSON.parse(window.localStorage.getItem(nomCaching)));
    } else {
      fnFetch();
    }
  }, [nomCaching, fnFetch]);

  useEffect(() => {
    return () => {
      if (data.length > 0) {
        window.localStorage.setItem(nomCaching, JSON.stringify(data));
      }
    };
  }, [nomCaching, data]);

  return [data, setData];
}
