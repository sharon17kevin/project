import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="flex-col">
      <div className="h-14 bg-white flex rounded-md overflow-hidden justify-start">
        <button
          className="bg-slate-200 h-full w-1/5 md:w-10"
          onClick={() => toggleTile(!expandTile)}
        >
          {expandTile ? "-" : "+"}
        </button>
        <div className=" h-14 w-4/5 md:w-auto px-3 flex justify-center items-center">
          <p>{title}</p>
        </div>
      </div>
      {expandTile && (
        <div className="bg-customBlue-light px-2 font-darkerGrotesque py-2 w-full flex justify-center items-center">
          <p>{description.substring(0, 300)}</p> <button onClick={()=>navigate('/faq')} className="text-blue-500">more</button>
        </div>
      )}
    </div>
  );
};

export default ExpandableTile;
