import { useRef } from "react";

const InputField = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (value: string) => { console.log(value)};

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            handleSubmit(ref.current.value);
          }
        }}
      >
        <input
          type="text"
          id="input"
          value={ref.current?.value}
          placeholder="Enter your email here..."
          className="w-80 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </form>
    </div>
  );
};

export default InputField;
