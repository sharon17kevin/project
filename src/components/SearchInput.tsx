import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useProductQueryStore from "../zustand/productQueryStore";
import { Search } from "lucide-react";

interface Props {
  dismissDialog: () => void;
}

const SearchInput = ({ dismissDialog }: Props) => {
  const search = useProductQueryStore((s) => s.search);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          search(ref.current.value);
          dismissDialog();
          navigate("/products");
        }
      }}
    >
      <div className="flex items-center bg-primary p-2 rounded-lg shadow-md">
        <input
          id="search"
          type="text"
          ref={ref}
          className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Search for products..."
        />
        <label htmlFor="search" className="ml-2 flex justify-center items-center">
          <button type="submit">
            <Search className="text-gray-500 hover:text-green-500" />
          </button>
        </label>
      </div>
    </form>
  );
};

export default SearchInput;
