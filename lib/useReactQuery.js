import { useQuery } from "@tanstack/react-query";

const useReactQuery = (string, cb, setData) => {
  const { isSuccess, data } = useQuery(
    [string],
    cb,

    { onSuccess: () => setData(data) }
  );

  if (!isSuccess) return null;

  return data.results;
};

export { useReactQuery };
