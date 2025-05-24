// hooks/useMemeGenerator.ts
import { useCallback, useEffect, useRef, useState } from "react";
import { MemeProps, ImgflipResponse } from "@/type";

export function useMemeGenerator() {
  const [memes, setMemes] = useState<MemeProps[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<MemeProps | null>(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data: ImgflipResponse = await res.json();
        setMemes(data.data.memes);
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    };

    fetchMemes();
  }, []);

  const handleSelectMeme = useCallback(
    (id: string) => {
      const meme = memes.find((meme) => meme.id === id);
      if (meme) setSelectedMeme(meme);
    },
    [memes]
  );

  const downloadMeme = useCallback(() => {
    if (!selectedMeme || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = selectedMeme.url;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, selectedMeme.width, selectedMeme.height);

      ctx.font = "bold 40px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      // Outline
      ctx.strokeStyle = "black";
      ctx.lineWidth = 4;

      ctx.strokeText(topText, selectedMeme.width / 2, 50);
      ctx.fillText(topText, selectedMeme.width / 2, 50);

      ctx.strokeText(bottomText, selectedMeme.width / 2, selectedMeme.height - 20);
      ctx.fillText(bottomText, selectedMeme.width / 2, selectedMeme.height - 20);

      const link = document.createElement("a");
      link.download = `${selectedMeme.name}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  }, [selectedMeme, topText, bottomText]);

  return {
    memes,
    selectedMeme,
    topText,
    bottomText,
    setTopText,
    setBottomText,
    handleSelectMeme,
    downloadMeme,
    canvasRef,
  };
}
