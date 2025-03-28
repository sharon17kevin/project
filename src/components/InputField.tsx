import { useRef } from "react";

const InputField = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            handleSubmit(ref.current.value);
            ref.current.value = "";
          }
        }}
        className="flex flex-col space-y-3 space-x-2 md:flex-row"
      >
        <input
          type="text"
          ref={ref}
          placeholder="Enter your email here..."
          className="w-80 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default InputField;
