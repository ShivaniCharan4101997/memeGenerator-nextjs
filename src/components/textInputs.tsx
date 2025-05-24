
type TextInputsProps={
    topText:string;
    bottomText:string;
    setTopText:(text:string)=>void;
    setBottomText:(text:string)=>void;

}

const TextInputs = ({setTopText,topText,setBottomText,bottomText}:TextInputsProps) => {
  return (
    <div className="mt-4 w-[400px]">
            <input
              type="text"
              placeholder="Top text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              className="mb-2 p-2 border rounded w-full border-black"
            />
            <input
              type="text"
              placeholder="Bottom text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              className="p-2 border rounded w-full border-black"
            />
          </div>
  )
}

export default TextInputs