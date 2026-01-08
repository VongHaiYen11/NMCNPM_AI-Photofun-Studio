import { ImageUpload } from '@/components/ui/ImageUpload';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProductInputSectionProps {
  currentImage: string | undefined;
  onImageChange: (base64: string | undefined) => void;
  AIDesignerPrompt: string;
  onAIDesignerPromptChange: (value: string) => void;
}

export const ProductInputSection: React.FC<ProductInputSectionProps> = ({
  currentImage,
  onImageChange,
  AIDesignerPrompt,
  onAIDesignerPromptChange
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/50 rounded-3xl p-8 mb-8">
      <h2 className="text-xl font-bold mb-6 text-center">
        {t('productMockupGenerator.inputs')}
      </h2>

      <ImageUpload
        value={currentImage}
        height="h-80"
        onChange={(base64) => onImageChange(base64)}
        onRemove={() => onImageChange(undefined)}
      />

      <div className="mt-6 flex flex-col gap-3">
        <h4 className="font-semibold">
          {t('productMockupGenerator.aiGraphicDesigner')}
        </h4>
        <textarea
          value={AIDesignerPrompt}
          onChange={(e) => onAIDesignerPromptChange(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15
                    text-white placeholder-white/40 resize-none
                    focus:outline-none focus:border-white"
          placeholder={t('productMockupGenerator.aiGraphicDesignerPlaceholder')}
        />

        <button className="w-full mt-2 px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-white/90">
          {t('productMockupGenerator.generateWithAI')}
        </button>
      </div>
    </div>
  );
};

