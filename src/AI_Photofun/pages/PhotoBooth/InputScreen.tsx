import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageUpload } from '@/components/ui/ImageUpload';
import { SingleSelectList } from '@/components/ui/SingleSelectList';

interface PhotoBoothInputScreenProps {
  currentImage?: string;
  setCurrentImage: (value: string | undefined) => void;
  selectedNumPhotos: string | undefined;
  setSelectedNumPhotos: (value: string | undefined) => void;
  setStatus: (value: boolean) => void;
}

export const PhotoBoothInputScreen: React.FC<PhotoBoothInputScreenProps> = ({
  currentImage,
  setCurrentImage,
  selectedNumPhotos,
  setSelectedNumPhotos,
  setStatus,
}) => {
  const { t } = useTranslation();

  const numberOfPhotos = ['photos_4', 'photos_6', 'photos_8', 'photos_9', 'photos_12'];
  const prefixednumberOfPhotos = numberOfPhotos.map((sz) => `numberOfPhotos.${sz}`);

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* STEP 1 */}
      <div className="w-full md:col-span-1">
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/50 rounded-3xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 text-center">
            {t('photoBooth.uploadTitle')}
          </h2>

          <ImageUpload
            value={currentImage}
            height="h-100"
            onChange={(base64) => {
              setCurrentImage(base64);
            }}
            onRemove={() => setCurrentImage(undefined)}
          />
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
          md:col-span-1
          ${!currentImage
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : 'cursor-pointer'}
        `}
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {t('photoBooth.optionsTitle')}
        </h2>
        <SingleSelectList
          feature="photoBooth"
          keys={prefixednumberOfPhotos}
          value={selectedNumPhotos}
          onChange={setSelectedNumPhotos}
          categories="photoCount"
        />
        {/* Generate Photos */}
        <button
          className="
            mt-4
            w-full
            px-6 py-3
            bg-white text-black
            rounded-lg
            font-semibold
            hover:bg-white/90
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          disabled={selectedNumPhotos === undefined}
          onClick={() => setStatus(false)}
        >
          {t(`photoBooth.generateButton`)}
        </button>
      </div>
    </div>
  );
};


