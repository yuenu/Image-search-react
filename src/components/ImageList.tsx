import React from 'react';

// Components
import ImageCard from './ImageCard'

// Type
import { RootObject } from '../api/unsplash'
// Style
import '../css/ImageList.css'

interface Props {
  images: RootObject[]
}

const ImageList: React.FC<Props> = ({images}) => {
  const imagesList = images.map((image: RootObject) => {
    return (
      <ImageCard key={image.id} image={image} />
    )
  });

  return (
    <div className="image-list">{imagesList}</div>
  )
};

export default ImageList;
