import PropTypes from 'prop-types';

import style from './image-gallery-item.module.css'

const ImageGalleryItem = ({webformatURL, largeImageURL, showImage}) => {
    return (
        <li onClick={()=> showImage({largeImageURL})} className={style.ImageGalleryItem} >
        <img className={style.ImageGalleryItemImage} src={webformatURL} alt="photka" />
      </li>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    showImage: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}