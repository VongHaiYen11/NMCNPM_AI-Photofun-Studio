import React from 'react';
import { useTranslation } from 'react-i18next';
import { StepAccordion } from '@/components/ui/StepAccordion';
import { SideImageLoader } from '@/components/ui/SideImageLoader';
import { SingleSelectList } from '@/components/ui/SingleSelectList';
import { MultiSelectList } from '@/components/ui/MultiSelectList';

interface ConfigurationStepsProps {
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
}

export const ConfigurationSteps: React.FC<ConfigurationStepsProps> = ({
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
  posesFashion
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-4">
      <StepAccordion
        title={t('photoshoot.step2Title')}
        subtitle={t('photoshoot.step2Desc')}
        isOpen={openStep === 2}
        onToggle={() => onToggleStep(2)}
      >
        <div className="flex flex-row gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <h4 className="font-semibold text-md text-white/80">
              {t('photoshoot.outfit')}
            </h4>
            <SideImageLoader
              value={outfitImage}
              onChange={onOutfitImageChange}
              onRemove={() => onOutfitImageChange(undefined)}
              fullWidth
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h4 className="font-semibold text-md text-white/80">
              {t('photoshoot.object')}
            </h4>
            <SideImageLoader
              value={objectImage}
              onChange={onObjectImageChange}
              onRemove={() => onObjectImageChange(undefined)}
              fullWidth
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h4 className="font-semibold text-md text-white/80">
              {t('photoshoot.background')}
            </h4>
            <SideImageLoader
              value={backgroundImage}
              onChange={onBackgroundImageChange}
              onRemove={() => onBackgroundImageChange(undefined)}
              fullWidth
            />
          </div>
        </div>
      </StepAccordion>

      <StepAccordion
        title={t('photoshoot.step3Title')}
        subtitle={t('photoshoot.step3Desc')}
        isOpen={openStep === 3}
        onToggle={() => onToggleStep(3)}
      >
        <div className="flex flex-col gap-6 w-full">
          <SingleSelectList
            feature="photoshoot"
            keys={prefixedAngles}
            value={selectedCameraAngle}
            onChange={onSelectedCameraAngleChange}
            categories='cameraAngle'
          />
          <SingleSelectList
            feature="photoshoot"
            keys={prefixedColorGrade}
            value={selectedColorGrade}
            onChange={onSelectedColorGradeChange}
            categories='colorGrade'
          />
        </div>
      </StepAccordion>

      <StepAccordion
        title={t('photoshoot.step4Title')}
        subtitle={t('photoshoot.step4Desc')}
        isOpen={openStep === 4}
        onToggle={() => onToggleStep(4)}
      >
        <SingleSelectList
          feature="photoshoot"
          keys={prefixedImageSize}
          value={selectedSize}
          onChange={onSelectedSizeChange}
          categories='aspectRatio'
        />
      </StepAccordion>

      <StepAccordion
        title={t('photoshoot.step5Title')}
        subtitle={t('photoshoot.step5Desc')}
        isOpen={openStep === 5}
        onToggle={() => onToggleStep(5)}
      >
        <div className="max-h-[360px] overflow-y-auto pr-2">
          <div className="flex gap-8 justify-end">
            <button
              className="text-white/50 hover:text-white font-semibold"
              onClick={() => onSelectedPosesChange(prefixedPoses)}
            >
              {t('photoshoot.selectAll')}
            </button>
            <button
              className="text-white/50 hover:text-red-500 font-semibold"
              onClick={() => onSelectedPosesChange([])}
            >
              {t('photoshoot.clearSelection')}
            </button>
          </div>
          <MultiSelectList
            feature="photoshoot"
            keys={posesPortraitsCloseUp}
            value={selectedPoses}
            onChange={onSelectedPosesChange}
            categories='categories.Portraits & Close-ups'
          />
          <MultiSelectList
            feature="photoshoot"
            keys={posesFullWediumShorts}
            value={selectedPoses}
            onChange={onSelectedPosesChange}
            categories='categories.Full & Medium Shots'
          />
          <MultiSelectList
            feature="photoshoot"
            keys={posesCreativeAngles}
            value={selectedPoses}
            onChange={onSelectedPosesChange}
            categories='categories.Creative Angles & Perspectives'
          />
          <MultiSelectList
            feature="photoshoot"
            keys={posesFashion}
            value={selectedPoses}
            onChange={onSelectedPosesChange}
            categories='categories.Fashion & Editorial'
          />
          <MultiSelectList
            feature="photoshoot"
            keys={posesThemed}
            value={selectedPoses}
            onChange={onSelectedPosesChange}
            categories='categories.Themed, Sitting & Lying Poses'
          />
          <MultiSelectList
            feature="photoshoot"
            keys={posesDynamic}
            value={selectedPoses}
            onChange={onSelectedPosesChange}
            categories='categories.Dynamic & Candid'
          />
        </div>
      </StepAccordion>
    </div>
  );
};

