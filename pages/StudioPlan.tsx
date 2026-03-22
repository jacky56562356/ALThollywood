import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Map, Building, Sparkles, Loader2 } from 'lucide-react';

export default function StudioPlan() {
  const [planImage, setPlanImage] = useState<string | null>(null);
  const [renderImage, setRenderImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      // Initialize Gemini API
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // 1. Generate Master Plan (规划图)
      const planResponse = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: 'A professional architectural top-down master plan blueprint for a 500-mu (82 acres) film and television production base. Includes sound stages, backlots, post-production facilities, and a central plaza. High detail, architectural drawing style, clean lines, labels, blueprint style.',
        config: {
          imageConfig: { aspectRatio: "16:9", imageSize: "1K" }
        }
      });

      let planBase64 = '';
      for (const part of planResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          planBase64 = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      // 2. Generate Rendering (效果图)
      const renderResponse = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: 'A stunning 3D architectural rendering of a massive modern film and television production base at sunset. Cinematic lighting, huge sound stages with modern facades, outdoor shooting areas, lush landscaping, bustling with production activity. Photorealistic, 8k resolution, epic scale.',
        config: {
          imageConfig: { aspectRatio: "16:9", imageSize: "1K" }
        }
      });

      let renderBase64 = '';
      for (const part of renderResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          renderBase64 = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (!planBase64 || !renderBase64) {
        throw new Error("Failed to extract image data from response.");
      }

      setPlanImage(planBase64);
      setRenderImage(renderBase64);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate images. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-4">Future Expansion</h2>
          <h1 className="text-4xl md:text-6xl font-cinematic font-black mb-6 tracking-tight">500-Mu Film Base Master Plan</h1>
          <p className="text-brandGray max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Explore the conceptual architectural designs for our upcoming 500-mu (82-acre) state-of-the-art cinematic production facility.
          </p>
        </div>

        {(!planImage && !renderImage) ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 rounded-3xl">
            <Sparkles className="w-16 h-16 text-brandCyan mb-6 opacity-50" />
            <h3 className="text-2xl font-cinematic font-bold mb-4 text-white">Generate Conceptual Designs</h3>
            <p className="text-brandGray text-center max-w-md mb-8">
              Click below to use our advanced AI to generate the architectural master plan (规划图) and 3D rendering (效果图) for the new studio expansion.
            </p>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-8 py-4 brand-bg text-white font-black rounded-xl uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brandCyan/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <><Loader2 className="animate-spin" size={20} /> Generating... (This may take a minute)</>
              ) : (
                <><Sparkles size={20} /> Generate AI Concept Plans</>
              )}
            </button>
            {error && <p className="text-red-500 mt-4 text-sm bg-red-500/10 p-4 rounded-lg border border-red-500/20">{error}</p>}
          </div>
        ) : (
          <div className="space-y-16 animate-in fade-in duration-700">
            {/* Master Plan */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-brandCyan/10 flex items-center justify-center text-brandCyan border border-brandCyan/30">
                  <Map size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-cinematic font-bold text-white">Architectural Master Plan (规划图)</h3>
                  <p className="text-brandGray text-sm">Top-down blueprint of the 500-mu facility layout.</p>
                </div>
              </div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-brandBlack/50 relative group shadow-2xl">
                {planImage ? (
                  <img src={planImage} alt="Master Plan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brandGray"><Loader2 className="animate-spin" /></div>
                )}
              </div>
            </div>

            {/* Rendering */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-brandPurple/10 flex items-center justify-center text-brandPurple border border-brandPurple/30">
                  <Building size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-cinematic font-bold text-white">3D Studio Rendering (效果图)</h3>
                  <p className="text-brandGray text-sm">Cinematic visualization of the completed production base.</p>
                </div>
              </div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-brandBlack/50 relative group shadow-2xl">
                {renderImage ? (
                  <img src={renderImage} alt="3D Rendering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brandGray"><Loader2 className="animate-spin" /></div>
                )}
              </div>
            </div>
            
            <div className="flex justify-center pt-8">
               <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-white/10 transition-all disabled:opacity-50"
                >
                  {isGenerating ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />} 
                  Regenerate Designs
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
