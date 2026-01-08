import React from 'react';
import { useTranslation } from 'react-i18next';
import { ModelUploadSection } from './ModelUploadSection';
import { ConfigurationSteps } from './ConfigurationSteps';

interface PhotoshootInputScreenProps {
  currentImage: string | undefined;
  onImageChange: (base64: string | undefined) => void;
  mode: 'Upload' | 'Generate';
  onModeChange: (mode: 'Upload' | 'Generate') => void;
  AIDesignerPrompt: string;
  onAIDesignerPromptChange: (value: string) => void;
  modelLibrary: string[];
  onModelLibraryChange: (library: string[]) => void;
  openStep: number | null;
  onToggleStep: (step: number) => void;
  outfitImage: string | undefined;
  onOutfitImageChange: (value: string | undefined) => void;
  objectImage: string | undefined;
  onObjectImageChange: (value: string | undefined) => void;
  backgroundImage: string | undefined;
  onBackgroundImageChange: (value: string | undefined) => void;
  selectedCameraAngle: string | null;
  onSelectedCameraAngleChange: (key: string) => void;
  selectedColorGrade: string | null;
  onSelectedColorGradeChange: (key: string) => void;
  selectedSize: string | null;
  onSelectedSizeChange: (key: string) => void;
  selectedPoses: string[];
  onSelectedPosesChange: (poses: string[]) => void;
  prefixedAngles: string[];
  prefixedColorGrade: string[];
  prefixedImageSize: string[];
  prefixedPoses: string[];
  posesPortraitsCloseUp: string[];
  posesFullWediumShorts: string[];
  posesCreativeAngles: string[];
  posesThemed: string[];
  posesDynamic: string[];
  posesFashion: string[];
  onStartOver: () => void;
  onGenerate: () => void;
}

export const PhotoshootInputScreen: React.FC<PhotoshootInputScreenProps> = ({
  currentImage,
  onImageChange,
  mode,
  onModeChange,
  AIDesignerPrompt,
  onAIDesignerPromptChange,
  modelLibrary,
  onModelLibraryChange,
  openStep,
  onToggleStep,
  outfitImage,
  onOutfitImageChange,
  objectImage,
  onObjectImageChange,
  backgroundImage,
  onBackgroundImageChange,
  selectedCameraAngle,
  onSelectedCameraAngleChange,
  selectedColorGrade,
  onSelectedColorGradeChange,
  selectedSize,
  onSelectedSizeChange,
  selectedPoses,
  onSelectedPosesChange,
  prefixedAngles,
  prefixedColorGrade,
  prefixedImageSize,
  prefixedPoses,
  posesPortraitsCloseUp,
  posesFullWediumShorts,
  posesCreativeAngles,
  posesThemed,
  posesDynamic,
  posesFashion,
  onStartOver,
  onGenerate
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      <ModelUploadSection
        currentImage={currentImage}
        onImageChange={onImageChange}
        mode={mode}
        onModeChange={onModeChange}
        AIDesignerPrompt={AIDesignerPrompt}
        onAIDesignerPromptChange={onAIDesignerPromptChange}
        modelLibrary={modelLibrary}
        onModelLibraryChange={onModelLibraryChange}
      />

      <div
        aria-disabled={!currentImage}
        className={`
          w-full 
          md:col-span-2
          ${!currentImage
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : 'cursor-pointer'}
        `}
      >
        <ConfigurationSteps
          openStep={openStep}
          onToggleStep={onToggleStep}
          outfitImage={outfitImage}
          onOutfitImageChange={onOutfitImageChange}
          objectImage={objectImage}
          onObjectImageChange={onObjectImageChange}
          backgroundImage={backgroundImage}
          onBackgroundImageChange={onBackgroundImageChange}
          selectedCameraAngle={selectedCameraAngle}
          onSelectedCameraAngleChange={onSelectedCameraAngleChange}
          selectedColorGrade={selectedColorGrade}
          onSelectedColorGradeChange={onSelectedColorGradeChange}
          selectedSize={selectedSize}
          onSelectedSizeChange={onSelectedSizeChange}
          selectedPoses={selectedPoses}
          onSelectedPosesChange={onSelectedPosesChange}
          prefixedAngles={prefixedAngles}
          prefixedColorGrade={prefixedColorGrade}
          prefixedImageSize={prefixedImageSize}
          prefixedPoses={prefixedPoses}
          posesPortraitsCloseUp={posesPortraitsCloseUp}
          posesFullWediumShorts={posesFullWediumShorts}
          posesCreativeAngles={posesCreativeAngles}
          posesThemed={posesThemed}
          posesDynamic={posesDynamic}
          posesFashion={posesFashion}
        />

        <div className="flex items-center justify-between mt-6">
          <button
            className="
              px-6 py-3
              border border-white/20
              rounded-lg
              text-white/70
              font-semibold
              transition
              hover:bg-white/10
              hover:text-white
            "
            onClick={onStartOver}
          >
            {t('common.startOver')}
          </button>

          <button
            className="
              px-6 py-3
              bg-white text-black
              rounded-lg
              font-semibold
              hover:bg-white/90
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            disabled={selectedPoses.length === 0}
            onClick={onGenerate}
          >
            {`${t(`photoshoot.generateButton`)} (${selectedPoses.length})`}
          </button>
        </div>
      </div>
    </div>
  );
};

