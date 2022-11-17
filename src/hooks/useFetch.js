import { useState, useEffect } from "react";

export const useFetch = (serviceName, dependencies) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    serviceName().then((result) => {
      setData(result);
      setIsLoading(false);
    });
  }, dependencies);

  return [isLoading, data];
};
