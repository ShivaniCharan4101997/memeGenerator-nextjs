import NextImage from 'next/image';

type MemeDisplayProps = {
  selectedMeme: {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
  };
  topText: string;
  bottomText: string;
};

const MemeDisplay = ({ selectedMeme, topText, bottomText }: MemeDisplayProps) => {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow-md p-4 max-w-2xl mx-auto">
      <h3 className="font-semibold text-xl text-center mb-4">{selectedMeme.name}</h3>

      <div
        className="relative w-full mx-auto"
        style={{ maxWidth: selectedMeme.width }}
      >
        <NextImage
          src={selectedMeme.url}
          alt={selectedMeme.name}
          width={selectedMeme.width}
          height={selectedMeme.height}
          className="rounded object-contain w-full h-auto"
        />

        {topText && (
          <p className="absolute top-[12rem] right-[-12rem] w-full text-center text-black font-extrabold text-3xl px-2 drop-shadow-md">
            {topText}
          </p>
        )}
        {bottomText && (
          <p className="absolute right-[-12rem] bottom-[12rem] w-full text-center text-black font-extrabold text-3xl px-2 drop-shadow-md">
            {bottomText}
          </p>
        )}
      </div>
    </div>
  );
};

export default MemeDisplay;
