interface Props {
  width: string;
  height: string;
  rounded: string;
  className?: string;
}

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded",
  className = "",
}: Props) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${width} ${height} ${rounded} ${className} flex-col flex overflow-clip`}
    >
      <div className="h-2/3"></div>
      <div className="bg-gray-300 flex-1 p-4">
        <div className="rounded-full bg-gray-400 animate-pulse w-full h-3 my-2"></div>
        <div className="rounded-full bg-gray-400 animate-pulse w-1/2 h-3 my-2"></div>
      </div>
    </div>
  );
};

export default Skeleton;
