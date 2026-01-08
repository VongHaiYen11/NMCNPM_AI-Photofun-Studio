import { BackToTools } from '@/components/ui/BackToTools';
import { GoBackTools } from '@/components/ui/GoBackTools';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { PhotoBoothInputScreen } from '@/pages/PhotoBooth/InputScreen';
import { PhotoBoothResultScreen } from '@/pages/PhotoBooth/ResultScreen';
import { usePhotoBooth } from '@/pages/PhotoBooth/usePhotoBooth';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PhotoBooth: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    status, setStatus,
    currentImage, setCurrentImage,
    selectedNumPhotos, setSelectedNumPhotos,
  } = usePhotoBooth();

  const resetAll = () => {
    // General
    setStatus(true);
    // Images
    setCurrentImage(undefined);
    // Options
    setSelectedNumPhotos(undefined);
  };


  return (
    <div className="w-full max-w-7xl px-6 md:px-12 py-12 flex flex-col items-center text-white">
      {/* Top bar */}
      <div className="w-full flex justify-between mb-8">
        {status ? (
          <BackToTools />
        ) : (
          <GoBackTools
            onClick={() => {
              setStatus(true); // quay lại màn input
              resetAll();      // reset các state khác
            }}
          />
        )}
        <LanguageSwitcher />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          {t('app.photoBoothTitle')}
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
          {t('photoBooth.subtitle')}
        </p>
      </motion.div>

      {status ? (
        <PhotoBoothInputScreen
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          selectedNumPhotos={selectedNumPhotos}
          setSelectedNumPhotos={setSelectedNumPhotos}
          setStatus={setStatus}
        />
      ) : (
        <PhotoBoothResultScreen
          currentImage={currentImage}
          onReset={resetAll}
        />
      )}

    </div>
  );
};