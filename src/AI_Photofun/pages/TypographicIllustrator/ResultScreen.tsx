import React from 'react';
import { useTranslation } from 'react-i18next';

interface TypographicIllustratorResultScreenProps {
  scenePrompt: string;
  onReset: () => void;
}

export const TypographicIllustratorResultScreen: React.FC<TypographicIllustratorResultScreenProps> = ({
  scenePrompt,
  onReset,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-5xl flex flex-col gap-8 items-center">
      {/* ORIGINAL PHRASE */}
      <div
        className="
          w-full
          rounded-2xl
          border border-white/20
          bg-white/5
          backdrop-blur-xl
          px-6 py-4
          text-center
        "
      >
        <p className="text-xs tracking-widest text-white/50 mb-1">
          {t('typographicIllustrator.originalPhrase')}
        </p>
        <p className="text-xl font-semibold">
          “{scenePrompt}”
        </p>
      </div>

      {/* ILLUSTRATION */}
      <div
        className="
          w-full
          rounded-2xl
          border border-white/20
          bg-white/5
          backdrop-blur-xl
          p-6
          flex
          flex-col
          gap-4
        "
      >
        <h3 className="text-lg font-bold">
          {t('typographicIllustrator.resultTitle')}
        </h3>

        {/* IMAGE HOLDER */}
        <div
          className="
            w-full
            aspect-square
            rounded-xl
            border
            border-dashed
            border-white/30
            bg-white/10
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* Sau này thay src bằng image generate được */}
          <img
            src="/placeholder.png"
            alt="Illustration result"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-4 mt-4">
        {/* Download */}
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


