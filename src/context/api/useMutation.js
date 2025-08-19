import { useState } from 'react';
import { useApi } from '../ApiContext';
import { usePage } from '../PageContext';

/**
 * Returns a function to mutate some data via the API, as well as some state
 * that tracks the response of that mutation request.
 */
const useMutation = (method, resource, tagsToInvalidate) => {
  const { request, invalidateTags } = useApi();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const result = await request(resource, {
        method,
        body: JSON.stringify(body),
      });

      setData(result);

      invalidateTags(tagsToInvalidate);
    } catch (err) {
      console.error(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { mutate, data, loading, error };
};

export default useMutation;
