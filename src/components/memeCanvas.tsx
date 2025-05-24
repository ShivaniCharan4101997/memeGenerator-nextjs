import { MemeProps } from "@/type";

type memeCanvasProps = {
  selectedMeme: MemeProps|null;
  canvasRef: React.RefObject<HTMLCanvasElement|null>;
};

const MemeCanvas = ({ selectedMeme,canvasRef}:memeCanvasProps) => {
  return (
    <div>
        <canvas width={selectedMeme?.width}
height={selectedMeme?.height} className='hidden'
ref={canvasRef}
/>
    </div>
  )
}

export default MemeCanvas