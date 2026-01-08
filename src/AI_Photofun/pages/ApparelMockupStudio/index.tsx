import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BackToTools } from '@/components/ui/BackToTools';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { GoBackTools } from '@/components/ui/GoBackTools';
import { useApparelMockupStudio } from '@/pages/ApparelMockupStudio/useApparelMockupStudio';
import { ApparelMockupStudioInputScreen } from './InputScreen';
import { ApparelMockupStudioResultScreen } from './ResultScreen';

export const ApparelMockupStudio: React.FC = () => {
  const { t } = useTranslation();

  const {
    status, setStatus,
    currentImage, setCurrentImage,
    AIDesignerPrompt, setAIDesignerPrompt,
    styleDescPrompt, setStyleDescPrompt,
    mode, setMode,
    uploadedMockup, setuploadedMockup,
    selectedMockup, setSelectedMockup,
    hexInput, setHexInput,
    colorways, setColorways
  } = useApparelMockupStudio();

  const mockupStyle = ['hanging', 'flatLay', 'folded'];

  const resetAll = () => {
    setStatus(true);
    setCurrentImage(undefined);
    setSelectedMockup('hanging');
    setAIDesignerPrompt('');
    setStyleDescPrompt('');
  };

  return (
    <div className="w-full max-w-7xl px-6 md:px-12 py-12 flex flex-col items-center text-white">
      <div className="w-full flex justify-between mb-8">
        {status ? (
          <BackToTools />
        ) : (
          <GoBackTools
            onClick={() => {
              setStatus(true);
              resetAll();
            }}
          />
        )}
        <LanguageSwitcher />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          {t('app.apparelMockupStudioTitle')}
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
          {t('productMockupGenerator.subtitle')}
        </p>
      </motion.div>

      {status ? (
        <ApparelMockupStudioInputScreen
          currentImage={currentImage}
          onImageChange={setCurrentImage}
          AIDesignerPrompt={AIDesignerPrompt}
          onAIDesignerPromptChange={setAIDesignerPrompt}
          mode={mode}
          onModeChange={setMode}
          uploadedMockup={uploadedMockup}
          onUploadedMockupChange={setuploadedMockup}
          styleDescPrompt={styleDescPrompt}
          onStyleDescPromptChange={setStyleDescPrompt}
          selectedMockup={selectedMockup}
          onSelectedMockupChange={setSelectedMockup}
          hexInput={hexInput}
          onHexInputChange={setHexInput}
          colorways={colorways}
          onColorwaysChange={setColorways}
          onGenerate={() => setStatus(false)}
          mockupStyle={mockupStyle}
        />
      ) : (
        <ApparelMockupStudioResultScreen
          currentImage={currentImage}
          onStartOver={() => {
            setStatus(true);
            resetAll();
          }}
        />
      )}
    </div>
  );
};