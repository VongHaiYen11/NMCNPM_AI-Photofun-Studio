import React from 'react';
import { useTranslation } from 'react-i18next';
import { PolaroidCard } from '@/components/ui/PolaroidCard';
import { RefinePanel } from '@/components/ui/RefinePanel';

interface PhotoshootResultScreenProps {
  currentImage: string | undefined;
  refineText: string;
  onRefineTextChange: (value: string) => void;
  onStartOver: () => void;
}

export const PhotoshootResultScreen: React.FC<PhotoshootResultScreenProps> = ({
  currentImage,
  refineText,
  onRefineTextChange,
  onStartOver
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-center">
      <PolaroidCard
        imageUrl={currentImage}
        name="Portrait"
        width={280}
      />

      <RefinePanel
        value={refineText}
        width={500}
        onChange={onRefineTextChange}
        onApplyAll={() => {
          console.log('Apply instruction:', refineText);
          // gọi API regenerate ở đây
        }}
      />

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
          {t(`photoshoot.downloadAllButton`)}
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
          onClick={onStartOver}
        >
          {t('common.startOver')}
        </button>
      </div>
    </div>
  );
};

