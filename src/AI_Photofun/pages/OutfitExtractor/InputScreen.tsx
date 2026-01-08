import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageUpload } from '@/components/ui/ImageUpload';

interface OutfitExtractorInputScreenProps {
  imageBase64: string;
  setImageBase64: (value: string) => void;
  setStatus: (value: boolean) => void;
  isLoading: boolean;
}

export const OutfitExtractorInputScreen: React.FC<OutfitExtractorInputScreenProps> = ({
  imageBase64,
  setImageBase64,
  setStatus,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="
        w-full
        max-w-3xl
        bg-white/[0.04]
        backdrop-blur-xl
        border
        border-white/50
        rounded-2xl
        p-8
        flex
        flex-col
        gap-2
      "
    >
      <p className="text-3xl font-bold text-center">
        {t('outfitExtractor.step1Title')}
      </p>
      <p className="text-sm text-white/50 text-center mb-2">
        {t('outfitExtractor.step1Desc')}
      </p>

      <ImageUpload
        value={imageBase64}
        onChange={(base64) => {
          setImageBase64(base64);
          setStatus(false); // tự nhảy qua màn result khi có ảnh
        }}
        isLoading={isLoading}
        label={t('outfitExtractor.dropImage')}
        className="w-full h-96"
      />
    </div>
  );
};


