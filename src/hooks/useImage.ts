import { useState, useEffect } from 'react';

// Type
import unsplash, { RootObject } from '../api/unsplash';

export type Response = {
  data: {
    results: RootObject[];
  };
  status: number;
  statusText: string;
};

type Hook = (
  defaultSearchTerm: string
) => [
  images: RootObject[],
  search: (term: string) => Promise<void>,
  errorMessage: string,
  loading: boolean
];

const useImage: Hook = (defaultSearchTerm: string) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<RootObject[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    setLoading(true)
    try {
      const response: Response = await unsplash.get('search/photos', {
        params: { query: term },
      });

      if (response.status === 200) {
        setImages(response.data.results);
        setErrorMessage('');
      } else {
        console.log('Is api broken?');
        setErrorMessage('Unexpect Error');
      }
    } catch (err) {
      setErrorMessage(`Unexpect Error := ${err}`);
    }
    setLoading(false)
  };

  return [images, search, errorMessage, loading];
};

export default useImage;
