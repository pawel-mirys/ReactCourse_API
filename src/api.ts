import axios from 'axios';
import { FetchedData } from './types';

const URL = 'https://api.unsplash.com/search/photos/';

export const searchImages = async (term: string) => {
  const response = await axios.get<FetchedData>(URL, {
    headers: {
      Authorization: 'Client-ID nBlcQrO0NnUl91AJHw0tOia2MFoFtHeX9KyobLwfPas',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
