import { useEffect, useState } from 'react';
import { useApi } from '../ApiContext';

/** Queries the API and returns the data, loading status, and error message. */
export default function useQuery(resource, tag) {
  const { request, provideTag } = useApi();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await request(resource);

      setData(result);
    } catch (err) {
      console.error(err);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tag) provideTag(tag, query);
    query();
  }, []);

  return { data, loading, error };
}
