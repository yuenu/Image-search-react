import React, { useState, useRef, useEffect } from 'react';

// Type
import { RootObject } from '../api/unsplash';

export type Props = {
  image: RootObject;
};

const ImageCard: React.FC<Props> = ({ image }) => {
  const [span, setSpan] = useState<number>(0);

  const imageRef = useRef<HTMLImageElement>(null);

  const handleSpan = () => {
    const height = imageRef.current?.clientHeight;

    if (height) {
      const newSpan = Math.ceil(height / 10);
      setSpan(newSpan);
    }
  };

  useEffect(() => {
    imageRef.current?.addEventListener('load', handleSpan)
  });

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img
        ref={imageRef}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
