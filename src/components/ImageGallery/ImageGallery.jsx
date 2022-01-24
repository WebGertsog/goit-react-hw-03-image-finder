import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, selectedImg }) => {
  return (
    <Gallery>
      {images &&
        images.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              tag={tags}
              webformatURL={webformatURL}
              selectedImg={() => selectedImg(largeImageURL)}
            />
          );
        })}
    </Gallery>
  );
};

export default ImageGallery;

ImageGallery.prototype = {
  images: PropTypes.array.isRequired,
  selectedImg: PropTypes.func.isRequired,
};
