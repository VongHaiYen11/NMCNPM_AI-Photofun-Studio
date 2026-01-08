import { ApparelMockupStudio } from '@/pages/ApparelMockupStudio';
import { CloneEffect } from '@/pages/CloneEffect';
import { Home } from '@/pages/Home';
import { OutfitExtractor } from '@/pages/OutfitExtractor';
import { PhotoBooth } from '@/pages/PhotoBooth';
import { Photoshoot } from '@/pages/Photoshoot';
import { ProductSceneGenerator } from '@/pages/ProductSceneGenerator';
import { TypographicIllustrator } from '@/pages/TypographicIllustrator';
import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  // To check if your Gemini API key is set correctly,
  // you can read it from import.meta.env and conditionally log or validate it here.
  // Make sure VITE_GEMINI_API_KEY is defined in your .env file.

  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

  React.useEffect(() => {
    if (!geminiApiKey) {
      console.warn('Gemini API key is missing! Please set VITE_GEMINI_API_KEY in your .env file.');
    } else {
      console.log('Gemini API key is present:', geminiApiKey ? 'Yes' : 'No');
      // Optionally, you could validate its format or length here
    }
  }, [geminiApiKey]);

  return (
    <Router future={{ v7_startTransition: true }}>
      <div className="min-h-screen w-full flex flex-col items-center bg-black relative overflow-x-hidden">
        {/* Premium Studio Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#111111_0%,_#000000_100%)]" />
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-indigo-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-blue-500/10 rounded-full blur-[140px]" />
        </div>

        {/* Content */}
        <div className="flex-1 w-full flex flex-col items-center py-12 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photoshoot" element={<Photoshoot />} />
            <Route path="/productSceneGenerator" element={<ProductSceneGenerator />} />
            <Route path="/apparelMockupStudio" element={<ApparelMockupStudio />} />
            <Route path="/typographicIllustrator" element={<TypographicIllustrator />} />
            <Route path="/photoBooth" element={<PhotoBooth />} />
            <Route path="/cloneEffect" element={<CloneEffect />} />
            <Route path="/outfitExtractor" element={<OutfitExtractor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};