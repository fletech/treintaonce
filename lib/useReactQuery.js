import { useQuery } from "react-query";

const useReactQuery = (string, cb, setData) => {
  const { isSuccess, data } = useQuery(string, cb, { onSuccess: setData });

  if (!isSuccess) return [];

  return data.results;
};

export { useReactQuery };
