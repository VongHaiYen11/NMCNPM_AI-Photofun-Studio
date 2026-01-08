import React from 'react';
import { useTranslation } from 'react-i18next';

interface ColorwayGeneratorProps {
  hexInput: string;
  onHexInputChange: (value: string) => void;
  colorways: string[];
  onColorwaysChange: (colorways: string[]) => void;
}

export const ColorwayGenerator: React.FC<ColorwayGeneratorProps> = ({
  hexInput,
  onHexInputChange,
  colorways,
  onColorwaysChange
}) => {
  const { t } = useTranslation();

  const isValidHex = (hex: string) => /^#([0-9A-Fa-f]{6})$/.test(hex);

  const handleAddColor = () => {
    if (!isValidHex(hexInput)) return;
    if (colorways.includes(hexInput)) return;
    onColorwaysChange([...colorways, hexInput]);
    onHexInputChange('#');
  };

  const handleRemoveColor = (hex: string) => {
    onColorwaysChange(colorways.filter((c) => c !== hex));
  };

  return (
    <div
      className="
        rounded-xl
        border border-white/20
        bg-white/5
        backdrop-blur-xl
        h-fit
        px-4
        py-4
        flex
        flex-col
        gap-4
        w-full
      "
    >
      <div>
        <h3 className="font-bold mb-1">
          {t('productMockupGenerator.colorwayGenerator')}
        </h3>
        <p className="text-white/40 text-sm">
          {t('productMockupGenerator.colorwayGeneratorDesc')}
        </p>
      </div>

      <div className="flex gap-2 w-full">
        <input
          value={hexInput}
          onChange={(e) => onHexInputChange(e.target.value.toUpperCase())}
          placeholder="#FFFFFF"
          className="
            flex-1
            px-4 py-3
            rounded-lg
            bg-white/10
            border border-white/20
            text-white
            placeholder-white/40
            focus:outline-none
            focus:border-white/40
          "
        />

        <button
          disabled={!isValidHex(hexInput)}
          onClick={handleAddColor}
          className="
            px-6
            rounded-lg
            bg-white/20
            text-white
            font-semibold
            hover:bg-white/30
            transition
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {colorways.map((hex) => (
          <div
            key={hex}
            className="
              flex items-center gap-2
              px-3 py-2
              rounded-full
              bg-white/10
              border border-white/20
            "
          >
            <div
              className="w-5 h-5 rounded-full border border-white/30"
              style={{ backgroundColor: hex }}
            />
            <span className="text-sm font-medium">{hex}</span>
            <button
              onClick={() => handleRemoveColor(hex)}
              className="
                ml-1
                text-white/40
                hover:text-white
                transition
              "
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

