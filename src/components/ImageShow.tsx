import { ImageType } from '../types';

type ImageProps = {
  alt: ImageType['alt_description'];
  src: ImageType['urls']
};

export const ImageShow = ({ alt, src }: ImageProps) => {
  return <img src={src.small} alt={alt} />;
};
