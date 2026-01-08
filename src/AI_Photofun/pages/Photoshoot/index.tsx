import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BackToTools } from '@/components/ui/BackToTools';
import { GoBackTools } from '@/components/ui/GoBackTools';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { usePhotoshoot } from '@/pages/Photoshoot/usePhotoshoot';
import { PhotoshootInputScreen } from './InputScreen';
import { PhotoshootResultScreen } from './ResultScreen';

export const Photoshoot: React.FC = () => {
  const { t } = useTranslation();
  const {
    status, setStatus,
    currentImage, setCurrentImage,
    AIDesignerPrompt, setAIDesignerPrompt,
    modelLibrary, setModelLibrary,
    mode, setMode,
    openStep, toggleStep,
    outfitImage, setOutfitImage,
    objectImage, setObjectImage,
    backgroundImage, setBackgroundImage,
    selectedCameraAngle, setSelectedCameraAngle,
    selectedColorGrade, setSelectedColorGrade,
    selectedSize, setSelectedSize,
    selectedPoses, setSelectedPoses,
    refineText, setRefineText
  } = usePhotoshoot();

  const cameraAngle = ['eyeLevel', 'lowAngle', 'highAngle', 'dutchAngle', 'wormsEyeView', 'birdsEyeView']
  const prefixedAngles = cameraAngle.map(angle => `angles.${angle}`);

  const colorGrade = ['none', 'cinematic', 'vintage', 'highContrast', 'vibrant', 'muted', 'warm', 'cool']
  const prefixedColorGrade = colorGrade.map(color => `grades.${color}`)

  const imageSize = ['1_1', '9_16', '16_9', '4_3', '3_4']
  const prefixedImageSize = imageSize.map(sz => `imageSize.${sz}`)

  const poses = [
    'smiling_portrait',
    'laughing_portrait',
    'serious_close_up',
    'thoughtful_look',
    'side_profile',
    'head_tilt',
    'playful_wink',
    'soft_smile',

    'confident_full_body',
    'walking_pose',
    'hands_in_pockets',
    'arms_crossed',
    'hand_on_hip',
    'leaning_pose',
    'jumping_in_the_air',
    'twirling_shot',

    'low_angle_shot',
    'high_angle_shot',
    'from_below_face',
    'over_the_shoulder_glance',
    'looking_over_shoulder',

    'sitting_pose',
    'crouching_pose',
    'lying_on_grass',
    'hand_on_chin',
    'holding_balloons',
    'holding_flowers',

    'candid_moment',
    'hair_in_motion',
    'adjusting_jacket',
    'hand_towards_camera',
    'dancing_pose',
    'shielding_eyes_from_sun',
    
    'editorial_lean',
    'power_stance',
    'hand_on_collar',
    'silhouette_pose',
    'motion_blur',
    'architectural_pose',
    'lounging_elegantly',
    'dramatic_gaze',
  ];

  const prefixedPoses = poses.map(p => `poses.${p}`);

  const posesPortraitsCloseUp = prefixedPoses.slice(0, 8);
  const posesFullWediumShorts = prefixedPoses.slice(8, 16);
  const posesCreativeAngles = prefixedPoses.slice(16, 21);
  const posesThemed = prefixedPoses.slice(21, 27);
  const posesDynamic = prefixedPoses.slice(27, 33);
  const posesFashion = prefixedPoses.slice(33, 41);

  const resetAll = () => {
    setStatus(true);
    setMode('Upload');
    toggleStep(2);
    setCurrentImage(undefined);
    setModelLibrary([]);
    setOutfitImage(undefined);
    setObjectImage(undefined);
    setBackgroundImage(undefined);
    setSelectedCameraAngle('angles.eyeLevel');
    setSelectedColorGrade('grades.none');
    setSelectedSize('imageSize.1_1');
    setSelectedPoses([]);
    setRefineText('');
    setAIDesignerPrompt('');
  };

  return (
    <div className="w-full max-w-7xl px-6 md:px-12 py-12 flex flex-col items-center text-white">
      <div className="w-full flex justify-between mb-8">
        {status ? (
          <BackToTools />
        ) : (
          <GoBackTools
            onClick={() => {
              setStatus(true);
              resetAll();
            }}
          />
        )}
        <LanguageSwitcher />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          {t('app.photoshootTitle')}
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
          {t('photoshoot.subtitle')}
        </p>
      </motion.div>

      {status ? (
        <PhotoshootInputScreen
          currentImage={currentImage}
          onImageChange={setCurrentImage}
          mode={mode}
          onModeChange={setMode}
          AIDesignerPrompt={AIDesignerPrompt}
          onAIDesignerPromptChange={setAIDesignerPrompt}
          modelLibrary={modelLibrary}
          onModelLibraryChange={setModelLibrary}
          openStep={openStep}
          onToggleStep={toggleStep}
          outfitImage={outfitImage}
          onOutfitImageChange={setOutfitImage}
          objectImage={objectImage}
          onObjectImageChange={setObjectImage}
          backgroundImage={backgroundImage}
          onBackgroundImageChange={setBackgroundImage}
          selectedCameraAngle={selectedCameraAngle}
          onSelectedCameraAngleChange={setSelectedCameraAngle}
          selectedColorGrade={selectedColorGrade}
          onSelectedColorGradeChange={setSelectedColorGrade}
          selectedSize={selectedSize}
          onSelectedSizeChange={setSelectedSize}
          selectedPoses={selectedPoses}
          onSelectedPosesChange={setSelectedPoses}
          prefixedAngles={prefixedAngles}
          prefixedColorGrade={prefixedColorGrade}
          prefixedImageSize={prefixedImageSize}
          prefixedPoses={prefixedPoses}
          posesPortraitsCloseUp={posesPortraitsCloseUp}
          posesFullWediumShorts={posesFullWediumShorts}
          posesCreativeAngles={posesCreativeAngles}
          posesThemed={posesThemed}
          posesDynamic={posesDynamic}
          posesFashion={posesFashion}
          onStartOver={resetAll}
          onGenerate={() => setStatus(false)}
        />
      ) : (
        <PhotoshootResultScreen
          currentImage={currentImage}
          refineText={refineText}
          onRefineTextChange={setRefineText}
          onStartOver={resetAll}
        />
      )}
    </div>
  );
};