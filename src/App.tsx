/* eslint-disable @typescript-eslint/no-unused-vars */
import { searchImages } from './api';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageList } from './components/ImageList/ImageList';
import { useState } from 'react';
import { ImageType } from './types';

function App() {
  const [listOfImages, setListOfImages] = useState<ImageType[]>([]);

  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setListOfImages((prev) => (prev = result));
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={listOfImages} />
    </>
  );
}

export default App;
