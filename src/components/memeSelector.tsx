import { MemeProps } from "@/type";

type MemeSelectorProps = {
  memes: MemeProps[];
  handleSelectMeme: (id: string) => void;
};

const MemeSelector = ({memes,handleSelectMeme}:MemeSelectorProps) => {
  return (
    <div>    <select
        className="mb-6 p-2 rounded border text-gray-700"
        onChange={(e) => handleSelectMeme(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select a meme</option>
        {memes.map((meme) => (
          <option key={meme.id} value={meme.id}>
            {meme.name}
          </option>
        ))}
      </select></div>
  )
}

export default MemeSelector