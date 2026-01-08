import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageUpload } from '@/components/ui/ImageUpload';
import { MultiSelectList } from '@/components/ui/MultiSelectList';

interface ProductSceneGeneratorInputScreenProps {
  currentImage?: string;
  setCurrentImage: (value: string | undefined) => void;
  selectedCameraAngle: string[];
  setSelectedCameraAngle: (value: string[]) => void;
  setStatus: (value: boolean) => void;
}

export const ProductSceneGeneratorInputScreen: React.FC<ProductSceneGeneratorInputScreenProps> = ({
  currentImage,
  setCurrentImage,
  selectedCameraAngle,
  setSelectedCameraAngle,
  setStatus,
}) => {
  const { t } = useTranslation();

  const cameraAngle = [
    'front',
    'back',
    'side_left',
    'side_right',
    'top',
    'bottom',
    'three_quarter',
    'close_up',
    'in_context',
  ];
  const prefixedAngles = cameraAngle.map((angle) => `angles.${angle}`);

  const resetAngles = () => setSelectedCameraAngle([]);

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* STEP 1 */}
      <div className="w-full md:col-span-1">
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/50 rounded-3xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 text-center">
            {t('productSceneGenerator.step1Title')}
          </h2>

          <ImageUpload
            value={currentImage}
            height="h-120"
            onChange={(base64) => {
              setCurrentImage(base64);
            }}
            onRemove={() => setCurrentImage(undefined)}
          />
          <div className="mt-6 flex flex-col gap-3">
            <textarea
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15
                        text-white placeholder-white/40 resize-none
                        focus:outline-none focus:border-white"
              placeholder={t('photoshoot.modelGenPlaceholder')}
            />

            <button className="w-full px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90">
              {t('photoshoot.generateModel')}
            </button>
          </div>
        </div>
      </div>

      {/* STEP 2 */}
      <div
        aria-disabled={!currentImage}
        className={`
          rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl
          h-fit
          px-6
          py-6
          flex 
          flex-col
          items-start
          w-full 
          md:col-span-2
          ${!currentImage
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : 'cursor-pointer'}
        `}
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {t('productSceneGenerator.step2Title')}
        </h2>
        <p className="text-sm text-white/50 mb-4">
          {t('productSceneGenerator.step2Desc')}
        </p>

        <MultiSelectList
          feature="productSceneGenerator"
          keys={prefixedAngles}
          value={selectedCameraAngle}
          onChange={setSelectedCameraAngle}
        />

        <div className="flex w-full items-center justify-between mt-4">
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
            onClick={resetAngles}
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
            disabled={selectedCameraAngle.length === 0}
            onClick={() => setStatus(false)}
          >
            {`${t(`photoshoot.generateButton`)} (${selectedCameraAngle.length})`}
          </button>
        </div>
      </div>
    </div>
  );
};


