import { useState } from 'react';

export const usePhotoBooth = () => {
  const [status, setStatus] = useState<boolean>(true);
  const [currentImage, setCurrentImage] = useState<string | undefined>();
  const [selectedNumPhotos, setSelectedNumPhotos] = useState<string | undefined>();

  return {
    status, setStatus,
    currentImage, setCurrentImage,
    selectedNumPhotos, setSelectedNumPhotos
  };
};
