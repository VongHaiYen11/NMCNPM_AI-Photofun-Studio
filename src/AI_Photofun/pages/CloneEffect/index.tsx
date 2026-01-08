import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BackToTools } from '@/components/ui/BackToTools';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { GoBackTools } from '@/components/ui/GoBackTools';
import { useCloneEffect } from '@/pages/CloneEffect/useCloneEffect';
import { CloneEffectInputScreen } from '@/pages/CloneEffect/InputScreen';
import { CloneEffectResultScreen } from '@/pages/CloneEffect/ResultScreen';

export const CloneEffect: React.FC = () => {
  const { t } = useTranslation();

  const {
    status, setStatus,   // true = upload step, false = result step
    imageBase64, setImageBase64,
    isLoading, setIsLoading,
    refineText, setRefineText
  } = useCloneEffect();

  // Reset
  const resetAll = () => {
    setStatus(true);
    setImageBase64('');
    setIsLoading(false);
    setRefineText('');
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
          {t('app.cloneEffectTitle')}
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
          {t('cloneEffect.subtitle')}
        </p>
      </motion.div>

      {status ? (
        <CloneEffectInputScreen
          imageBase64={imageBase64}
          setImageBase64={setImageBase64}
          setStatus={setStatus}
          isLoading={isLoading}
        />
      ) : (
        <CloneEffectResultScreen
          imageBase64={imageBase64}
          refineText={refineText}
          setRefineText={setRefineText}
          onReset={resetAll}
        />
      )}
    </div>
  );
};