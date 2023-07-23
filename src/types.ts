export type ImageType = {
  alt_description: string;
  id: string;
  slug: string;
  urls: {
    small: string;
  };
};

export type FetchedData = {
  results: ImageType[];
};
