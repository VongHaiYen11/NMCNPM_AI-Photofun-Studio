import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BackToTools } from '@/components/ui/BackToTools';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { GoBackTools } from '@/components/ui/GoBackTools';
import { useTypographicIllustrator } from '@/pages/TypographicIllustrator/useTypographicIllustrator';
import { TypographicIllustratorInputScreen } from '@/pages/TypographicIllustrator/InputScreen';
import { TypographicIllustratorResultScreen } from '@/pages/TypographicIllustrator/ResultScreen';

export const TypographicIllustrator: React.FC = () => {
  const { t } = useTranslation();
  
  const {
    status, setStatus,
    scenePrompt, setScenePrompt
  } = useTypographicIllustrator()

  // RESET ALL STATE
  const resetAll = () => {
    setStatus(true);
    setScenePrompt('');
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
          {t('app.typographicIllustratorTitle')}
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
          {t('typographicIllustrator.subtitle')}
        </p>
      </motion.div>

      {status ? (
        <TypographicIllustratorInputScreen
          scenePrompt={scenePrompt}
          setScenePrompt={setScenePrompt}
          setStatus={setStatus}
        />
      ) : (
        <TypographicIllustratorResultScreen
          scenePrompt={scenePrompt}
          onReset={resetAll}
        />
      )}
    </div>
  );
};