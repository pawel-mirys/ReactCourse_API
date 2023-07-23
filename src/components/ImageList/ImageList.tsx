import { ImageType } from '../../types';
import { ImageShow } from '../ImageShow';
import './ImageList.css';

type ImageListProps = {
  images: ImageType[];
};

export const ImageList = ({ images }: ImageListProps) => {
  return (
    <div className='image-list'>
      {images.map((image) => {
        return (
          <ImageShow
            src={image.urls}
            alt={image.alt_description}
            key={image.id}
          />
        );
      })}
    </div>
  );
};
