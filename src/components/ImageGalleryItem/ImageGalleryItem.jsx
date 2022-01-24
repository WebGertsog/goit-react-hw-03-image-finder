import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  tag,
  webformatURL,
  selectedImg,
  largeImageURL,
}) => {
  return (
    <GalleryItem onClick={() => selectedImg(largeImageURL)}>
      <GalleryImage src={webformatURL} alt={tag} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tag: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  selectedImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string,
};
