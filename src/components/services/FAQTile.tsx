import { useState } from "react";

interface Props {
  title: string;
  description: string;
  index: string;
  isFirst?: boolean;
}

const FAQTile = ({ title, description, index, isFirst=false }: Props) => {
  const [expandTile, setExpandTile] = useState(false);

  // Function to toggle tile expansion
  const toggleTile = (flag: boolean) => {
    setExpandTile(flag);
  };
  return (
    <div className={`font-darkerGrotesque text-xl text-black flex-col border border-b-black border-x-transparent ${isFirst? "border-t-black": "border-t-transparent"}`} onClick={() => toggleTile(!expandTile)}>
      <div className="h-14 flex overflow-hidden justify-start">
        <div className=" h-14 px-3 flex flex-1 justify-start items-center">
          <p>{title}</p>
        </div>
        <div
          className=" h-full flex justify-center items-center px-2"
        >
          <button className="px-4 border border-black rounded-full">{index}</button>
        </div>
      </div>
      {expandTile && (
        <div className=" h-32 w-full flex justify-center items-center">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default FAQTile;
