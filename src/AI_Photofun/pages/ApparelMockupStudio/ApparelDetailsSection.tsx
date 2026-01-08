import React from 'react';
import { useTranslation } from 'react-i18next';
import { SideImageLoader } from '@/components/ui/SideImageLoader';
import { SingleSelectList } from '@/components/ui/SingleSelectList';

interface ApparelDetailsSectionProps {
  mode: 'Upload' | 'Generate';
  onModeChange: (mode: 'Upload' | 'Generate') => void;
  uploadedMockup: string | undefined;
  onUploadedMockupChange: (value: string | undefined) => void;
  styleDescPrompt: string;
  onStyleDescPromptChange: (value: string) => void;
  selectedMockup: string | null;
  onSelectedMockupChange: (key: string) => void;
  mockupStyle: string[];
}

export const ApparelDetailsSection: React.FC<ApparelDetailsSectionProps> = ({
  mode,
  onModeChange,
  uploadedMockup,
  onUploadedMockupChange,
  styleDescPrompt,
  onStyleDescPromptChange,
  selectedMockup,
  onSelectedMockupChange,
  mockupStyle
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`
        rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl
        h-fit
        px-4
        py-4
        flex 
        flex-col
        items-start
        w-full 
      `}
    >
      <h3 className="font-bold mb-4">
        {t('productMockupGenerator.apparelDetails')}
      </h3>

      <div className="inline-flex bg-white/5 rounded-xl p-1 border border-white/20 w-full">
        <button
          onClick={() => onModeChange('Generate')}
          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition
            ${mode === 'Generate'
              ? 'bg-white text-black'
              : 'text-white/70 hover:bg-white/10'}
          `}
        >
          {t('productMockupGenerator.generateMockups')}
        </button>

        <button
          onClick={() => onModeChange('Upload')}
          className={`flex-1 px-4 py-2 rounded-lg font-semibold transition
            ${mode === 'Upload'
              ? 'bg-white text-black'
              : 'text-white/70 hover:bg-white/10'}
          `}
        >
          {t('productMockupGenerator.uploadMockup')}
        </button>
      </div>

      {mode === 'Upload' && (
        <div className="mt-6 p-6 rounded-2xl bg-white/5 text-white/80">
          <h4 className="font-semibold text-white/10">
            {t('productMockupGenerator.uploadApparelMockup')}
          </h4>
          <SideImageLoader
            value={uploadedMockup}
            onChange={onUploadedMockupChange}
            onRemove={() => onUploadedMockupChange(undefined)}
            fullWidth
          />
        </div>
      )}

      {mode === 'Generate' && (
        <div className="mt-6 flex flex-col">
          <h4 className="font-semibold text-white mb-3">
            {t('productMockupGenerator.apparelStyle')}
          </h4>
          <textarea
            value={styleDescPrompt}
            onChange={(e) => onStyleDescPromptChange(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 mb-2 rounded-xl bg-white/5 border border-white/15
                      text-white placeholder-white/40 resize-none
                      focus:outline-none focus:border-white"
            placeholder={t('productMockupGenerator.apparelStylePlaceholder')}
          />
          <p className="text-white/40 mb-3">
            {t('productMockupGenerator.apparelStyleDesc')}
          </p>
          <div className="w-full">
            <h4 className="font-semibold text-white">
              {t('productMockupGenerator.mockupStyle')}
            </h4>
            <SingleSelectList
              feature="productMockupGenerator"
              keys={mockupStyle}
              value={selectedMockup}
              onChange={onSelectedMockupChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

