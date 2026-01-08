import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { ImageUpload } from '@/components/ui/ImageUpload';

interface ModelUploadSectionProps {
  currentImage: string | undefined;
  onImageChange: (base64: string | undefined) => void;
  mode: 'Upload' | 'Generate';
  onModeChange: (mode: 'Upload' | 'Generate') => void;
  AIDesignerPrompt: string;
  onAIDesignerPromptChange: (value: string) => void;
  modelLibrary: string[];
  onModelLibraryChange: (library: string[]) => void;
}

export const ModelUploadSection: React.FC<ModelUploadSectionProps> = ({
  currentImage,
  onImageChange,
  mode,
  onModeChange,
  AIDesignerPrompt,
  onAIDesignerPromptChange,
  modelLibrary,
  onModelLibraryChange
}) => {
  const { t } = useTranslation();

  const handleImageUpload = (base64: string) => {
    onImageChange(base64);
    if (!modelLibrary.includes(base64)) {
      onModelLibraryChange([...modelLibrary, base64]);
    }
  };

  const handleRemoveFromLibrary = (index: number, img: string) => {
    onModelLibraryChange(modelLibrary.filter((_, i) => i !== index));
    if (currentImage === img) {
      onImageChange(undefined);
    }
  };

  return (
    <div className="w-full md:col-span-1">
      <div className="bg-white/[0.04] backdrop-blur-xl border border-white/50 rounded-3xl p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 text-center">
          {t('photoshoot.step1Title')}
        </h2>

        <ImageUpload
          value={currentImage}
          height="h-80"
          onChange={handleImageUpload}
          onRemove={() => onImageChange(undefined)}
        />
      </div>

      <div className="inline-flex bg-white/5 rounded-xl p-1 border border-white/20 w-full">
        <button
          onClick={() => onModeChange('Upload')}
          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition
            ${mode === 'Upload'
              ? 'bg-white text-black'
              : 'text-white/70 hover:bg-white/10'}
          `}
        >
          {t('photoshoot.uploadTab')}
        </button>

        <button
          onClick={() => onModeChange('Generate')}
          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition
            ${mode === 'Generate'
              ? 'bg-white text-black'
              : 'text-white/70 hover:bg-white/10'}
          `}
        >
          {t('photoshoot.generateTab')}
        </button>
      </div>

      {mode === 'Upload' && (
        <div className="text-sm mt-6 p-6 rounded-2xl bg-white/5 text-white/80 text-center">
          {t('photoshoot.uploadInstructions')}
        </div>
      )}

      {mode === 'Generate' && (
        <div className="mt-6 flex flex-col gap-3">
          <textarea
            value={AIDesignerPrompt}
            onChange={(e) => onAIDesignerPromptChange(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15
                      text-white placeholder-white/40 resize-none
                      focus:outline-none focus:border-white"
            placeholder={t('photoshoot.modelGenPlaceholder')}
          />

          <button className="w-full px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90">
            {t('photoshoot.generateModel')}
          </button>
        </div>
      )}

      <div className="mt-8 w-full">
        <h3 className="text-2xl font-bold mb-6">
          {t('photoshoot.libraryTitle')}
        </h3>

        {modelLibrary.length > 0 ? (
          <div className="flex gap-2 border border-slate-900/15 bg-white/5 rounded-lg px-4 py-4 overflow-x-auto overflow-y-hidden">
            {modelLibrary.map((img, index) => (
              <button
                key={index}
                onClick={() => onImageChange(img)}
                className="
                  relative
                  w-16 h-16
                  rounded-lg
                  flex-shrink-0
                  flex items-center justify-center
                  hover:border-white/40
                  transition
                  group
                "
              >
                <img
                  src={img}
                  alt={`Model ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />

                <X
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromLibrary(index, img);
                  }}
                  className="
                    absolute top-1 right-1
                    w-5 h-5
                    rounded-full
                    bg-black/70
                    text-white
                    text-xs
                    opacity-0
                    group-hover:opacity-100
                    transition
                    hover:bg-black
                  "
                >
                  ×
                </X>
              </button>
            ))}
          </div>
        ) : (
          <div
            className="
              w-full
              py-8
              rounded-xl
              border border-slate-900/15
              bg-white/5
              text-center
              text-sm
              text-white/50
            "
          >
            {t('photoshoot.libraryEmpty')}
          </div>
        )}
      </div>
    </div>
  );
};

