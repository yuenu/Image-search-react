import React, { useState } from 'react';
import unsplash, { RootObject } from '../api/unsplash';

//components
import SearchBar from './Search';
import ImageList from './ImageList';

// Type

export type Response = {
  data: {
    results: RootObject[];
  };
  status: number;
  statusText: string;
};

const App: React.FC = () => {
  const [images, setImages] = useState<RootObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSearchSubmit = async (term: string) => {
    setLoading(true);
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

    setLoading(false);
  };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <h2>Hello React by yhuenu</h2>
      <SearchBar onFormSubmit={(term) => onSearchSubmit(term)} />

      {!loading ? <ImageList images={images} /> : <h1>Now is Loading~~~~~</h1>}

      {!!errorMessage ? <h1 className="error">{errorMessage}</h1> : null}
    </div>
  );
};

export default App;
