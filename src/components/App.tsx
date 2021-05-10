import React from 'react';
import { RootObject } from '../api/unsplash';

// Hooks
import useImage from '../hooks/useImage';

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
  // Custom hooks
  const [images, search, errorMessage, loading] = useImage('sea');

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <h2>Hello React by yhuenu</h2>
      <SearchBar onFormSubmit={(term) => search(term)} />

      {!loading ? (
        <ImageList images={images} />
      ) : (
        <div className="ui segment" style={{ minHeight: '90vh' }}>
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      )}

      {!loading && !!errorMessage ? (
        <h1 className="error">{errorMessage}</h1>
      ) : null}
    </div>
  );
};

export default App;
