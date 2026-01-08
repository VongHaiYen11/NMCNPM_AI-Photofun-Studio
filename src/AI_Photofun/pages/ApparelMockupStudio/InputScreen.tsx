import React from 'react';
import { useTranslation } from 'react-i18next';
import { ApparelDetailsSection } from './ApparelDetailsSection';
import { ColorwayGenerator } from './ColorwayGenerator';
import { ProductInputSection } from './ProductInputSection';

interface ApparelMockupStudioInputScreenProps {
  currentImage: string | undefined;
  onImageChange: (base64: string | undefined) => void;
  AIDesignerPrompt: string;
  onAIDesignerPromptChange: (value: string) => void;
  mode: 'Upload' | 'Generate';
  onModeChange: (mode: 'Upload' | 'Generate') => void;
  uploadedMockup: string | undefined;
  onUploadedMockupChange: (value: string | undefined) => void;
  styleDescPrompt: string;
  onStyleDescPromptChange: (value: string) => void;
  selectedMockup: string | null;
  onSelectedMockupChange: (key: string) => void;
  hexInput: string;
  onHexInputChange: (value: string) => void;
  colorways: string[];
  onColorwaysChange: (colorways: string[]) => void;
  onGenerate: () => void;
  mockupStyle: string[];
}

export const ApparelMockupStudioInputScreen: React.FC<ApparelMockupStudioInputScreenProps> = ({
  currentImage,
  onImageChange,
  AIDesignerPrompt,
  onAIDesignerPromptChange,
  mode,
  onModeChange,
  uploadedMockup,
  onUploadedMockupChange,
  styleDescPrompt,
  onStyleDescPromptChange,
  selectedMockup,
  onSelectedMockupChange,
  hexInput,
  onHexInputChange,
  colorways,
  onColorwaysChange,
  onGenerate,
  mockupStyle
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center content-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full md:col-span-1">
          <ProductInputSection
            currentImage={currentImage}
            onImageChange={onImageChange}
            AIDesignerPrompt={AIDesignerPrompt}
            onAIDesignerPromptChange={onAIDesignerPromptChange}
          />
        </div>

        <div
          aria-disabled={!currentImage}
          className={`
            rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl
            h-fit
            px-6
            py-6
            flex 
            flex-col
            gap-4
            items-start
            w-full 
            md:col-span-1
            ${!currentImage
              ? 'opacity-50 cursor-not-allowed pointer-events-none'
              : 'cursor-pointer'}
          `}
        >
          <h2 className="text-xl font-bold">
            {t('productMockupGenerator.designSettings')}
          </h2>

          <ApparelDetailsSection
            mode={mode}
            onModeChange={onModeChange}
            uploadedMockup={uploadedMockup}
            onUploadedMockupChange={onUploadedMockupChange}
            styleDescPrompt={styleDescPrompt}
            onStyleDescPromptChange={onStyleDescPromptChange}
            selectedMockup={selectedMockup}
            onSelectedMockupChange={onSelectedMockupChange}
            mockupStyle={mockupStyle}
          />

          <ColorwayGenerator
            hexInput={hexInput}
            onHexInputChange={onHexInputChange}
            colorways={colorways}
            onColorwaysChange={onColorwaysChange}
          />
        </div>
      </div>

      <div className="w-fit mt-4">
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
          disabled={colorways.length === 0}
          onClick={onGenerate}
        >
          {t('productMockupGenerator.generateColorways', {
            count: colorways.length,
          })}
        </button>
      </div>
    </div>
  );
};

