import { useState } from "react";

interface Props {
  title: string;
  description: string;
}

const ExpandableTile = ({ title, description }: Props) => {
  const [expandTile, setExpandTile] = useState(false);

  // Function to toggle tile expansion
  const toggleTile = (flag: boolean) => {
    setExpandTile(flag);
  };
  return (
    <div className="flex-col">
      <div className="h-14 bg-white flex rounded-md overflow-hidden justify-start">
        <button
          className="bg-slate-200 h-full w-10"
          onClick={() => toggleTile(!expandTile)}
        >
          {expandTile ? "-" : "+"}
        </button>
        <div className=" h-14 px-3 flex justify-center items-center">
          <p>{title}</p>
        </div>
      </div>
      {expandTile && (
        <div className="bg-customBlue-light px-2 font-darkerGrotesque h-32 w-full flex justify-center items-center">
          <p>{description.substring(0, 300)}</p> <button className="text-blue-500">more</button>
        </div>
      )}
    </div>
  );
};

export default ExpandableTile;
