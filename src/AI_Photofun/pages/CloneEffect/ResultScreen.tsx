import React from 'react';
import { useTranslation } from 'react-i18next';
import { RefinePanel } from '@/components/ui/RefinePanel';
import { ImageResultHolder } from '@/components/ui/ImageResultHolder';

interface CloneEffectResultScreenProps {
  imageBase64: string;
  refineText: string;
  setRefineText: (value: string) => void;
  onReset: () => void;
}

export const CloneEffectResultScreen: React.FC<CloneEffectResultScreenProps> = ({
  imageBase64,
  refineText,
  setRefineText,
  onReset,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 items-center">
      {/* UPLOADED IMAGE */}
      <ImageResultHolder
        imageUrl={imageBase64}
        name={t('cloneEffect.clonedImage')}
        width={300}
        showDownload={false}
        showRegenerate={false}
      />

      <RefinePanel
        value={refineText}
        width={500}
        onChange={setRefineText}
        onApplyAll={() => {
          console.log('Apply instruction:', refineText);
          // gọi API regenerate ở đây
        }}
      />

      {/* ACTIONS */}
      <div className="flex items-center gap-4 mt-4">
        <button
          className="
            px-6 py-3
            bg-white
            text-black
            rounded-lg
            font-semibold
            hover:bg-white/90
            transition
            flex
            items-center
            gap-2
          "
        >
          {t('common.download')}
        </button>

        {/* Start Over */}
        <button
          className="
            px-6 py-3
            border
            border-white/20
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


