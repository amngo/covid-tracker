import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useRequest = (endpoint: string) => {
  const { data, error } = useSWR(endpoint, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
