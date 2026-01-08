import { BackToTools } from '@/components/ui/BackToTools';
import { GoBackTools } from '@/components/ui/GoBackTools';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ProductSceneGeneratorInputScreen } from '@/pages/ProductSceneGenerator/InputScreen';
import { ProductSceneGeneratorResultScreen } from '@/pages/ProductSceneGenerator/ResultScreen';
import { useProductSceneGenerator } from '@/pages/ProductSceneGenerator/useProductSceneGenerator';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ProductSceneGenerator: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    status, setStatus,
    currentImage, setCurrentImage,
    selectedCameraAngle, setSelectedCameraAngle
  } = useProductSceneGenerator()

  const resetAll = () => {
    // General
    setStatus(true);
    // Images
    setCurrentImage(undefined);
    // Options
    setSelectedCameraAngle([]);
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
          {t('app.productSceneGeneratorTitle')}
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
          {t('productSceneGenerator.subtitle')}
        </p>
      </motion.div>

      {status ? (
        <ProductSceneGeneratorInputScreen
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          selectedCameraAngle={selectedCameraAngle}
          setSelectedCameraAngle={setSelectedCameraAngle}
          setStatus={setStatus}
        />
      ) : (
        <ProductSceneGeneratorResultScreen
          currentImage={currentImage}
          onReset={resetAll}
        />
      )}

    </div>
  );
};