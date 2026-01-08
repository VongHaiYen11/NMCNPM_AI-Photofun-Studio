import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageResultHolder } from '@/components/ui/ImageResultHolder';

interface PhotoBoothResultScreenProps {
  currentImage?: string;
  onReset: () => void;
}

export const PhotoBoothResultScreen: React.FC<PhotoBoothResultScreenProps> = ({
  currentImage,
  onReset,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-6 content-start">
        <ImageResultHolder
          imageUrl={currentImage}
          name={t('photoBooth.resultTitle')}
          width={360}
          showDownload={false}
          showRegenerate={false}
        />
      </div>

      <div className="flex items-center gap-4">
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
        >
          {t(`common.downloadAll`)}
        </button>

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
          onClick={onReset}
        >
          {t('common.startOver')}
        </button>
      </div>
    </div>
  );
};


