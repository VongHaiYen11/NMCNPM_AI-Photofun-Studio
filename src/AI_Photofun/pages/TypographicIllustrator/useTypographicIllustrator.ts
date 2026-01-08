import React, { useState } from 'react';

export const useTypographicIllustrator = () => {

  const [status, setStatus] = useState<boolean>(true) // true = input, false = result

  const [scenePrompt, setScenePrompt] = useState<string>('');

  return {
    status, setStatus,
    scenePrompt, setScenePrompt
  }
}
