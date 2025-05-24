"use client";

import MemeSelector from "@/components/memeSelector";
import MemeDisplay from "@/components/memeDisplay";
import TextInputs from "@/components/textInputs";
import MemeCanvas from "@/components/memeCanvas";
import { useMemeGenerator } from "@/hooks/useMemeGenerator";

const Page = () => {
  const {
    memes,
    selectedMeme,
    topText,
    bottomText,
    setTopText,
    setBottomText,
    handleSelectMeme,
    downloadMeme,
    canvasRef,
  } = useMemeGenerator();

  return (
    <div className="p-6 text-gray-800">
      <MemeSelector memes={memes} handleSelectMeme={handleSelectMeme} />

      {selectedMeme && (
        <MemeDisplay selectedMeme={selectedMeme} topText={topText} bottomText={bottomText} />
      )}

      <TextInputs
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
      />

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={downloadMeme}
          disabled={!topText && !bottomText}
        >
          Download Meme
        </button>
      </div>

      <MemeCanvas selectedMeme={selectedMeme} canvasRef={canvasRef} />
    </div>
  );
};

export default Page;
