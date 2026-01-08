import React, { useState } from 'react';

export const useProductSceneGenerator = () => {

  const [status, setStatus] = useState<boolean>(true) // true = input, false = result

  // Ảnh đang thao tác
  const [currentImage, setCurrentImage] = useState<string | undefined>();

  const [selectedCameraAngle, setSelectedCameraAngle] = useState<string[]>([]);

  return {
    status, setStatus,
    currentImage, setCurrentImage,
    selectedCameraAngle, setSelectedCameraAngle
  }
}
