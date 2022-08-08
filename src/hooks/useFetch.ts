import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: any;
  fetch: () => void;
}

function useFetch<T>(fetchFn: () => Promise<T>): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchFn();
      setData(fetchedData);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [fetchFn]);

  return { data, loading, error, fetch };
}

export default useFetch;
