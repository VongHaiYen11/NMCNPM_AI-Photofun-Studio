import React, { useState } from 'react';

export const useOutfitExtractor = () => {

  // true = upload step, false = result step
  const [status, setStatus] = useState<boolean>(true);

  // Lưu ảnh dưới dạng base64
  const [imageBase64, setImageBase64] = useState<string>('');

  // Loading state khi upload
  const [isLoading, setIsLoading] = useState(false);

  const [refineText, setRefineText] = useState('');

  return {
    status, setStatus,
    imageBase64, setImageBase64,
    isLoading, setIsLoading,
    refineText, setRefineText
  }
}
