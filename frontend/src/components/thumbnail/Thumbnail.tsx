import React from 'react';

export interface ThumbnailProps {
  src: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  src
}: ThumbnailProps) => {
  return (
    <img src={src} alt='thumbnail' className='thumbnail'/>
  );
}

export default Thumbnail;
