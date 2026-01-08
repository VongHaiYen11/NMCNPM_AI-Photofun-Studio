import React from 'react';
import { useTranslation } from 'react-i18next';

interface TypographicIllustratorInputScreenProps {
  scenePrompt: string;
  setScenePrompt: (value: string) => void;
  setStatus: (value: boolean) => void;
}

export const TypographicIllustratorInputScreen: React.FC<TypographicIllustratorInputScreenProps> = ({
  scenePrompt,
  setScenePrompt,
  setStatus,
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
        gap-4
      "
    >
      <h2 className="text-xl font-bold mb-2">
        {t('typographicIllustrator.inputLabel')}
      </h2>

      <textarea
        rows={3}
        value={scenePrompt}
        onChange={(e) => setScenePrompt(e.target.value)}
        className="
          w-full
          px-4 py-3
          rounded-xl
          bg-white/5
          border
          border-white/15
          text-white
          placeholder-white/40
          resize-none
          focus:outline-none
          focus:border-white
        "
        placeholder={t('typographicIllustrator.inputPlaceholder')}
      />

      <button
        className="
          w-full
          px-6 py-3
          rounded-xl
          bg-white
          text-black
          font-semibold
          hover:bg-white/90
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
        disabled={!scenePrompt.trim()}
        onClick={() => setStatus(false)}
      >
        {t('typographicIllustrator.generateButton')}
      </button>
    </div>
  );
};


