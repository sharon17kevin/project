import usePlatfroms from "../../hooks/usePlatforms";
import useProductQueryStore from "../../zustand/productQueryStore";

function CategorySelector() {
  const { data, error } = usePlatfroms();
  const setPlatform = useProductQueryStore((s) => s.setPlatform);

  if (error) return;

  return (
    <div className="w-64">
      <label
        htmlFor="dropdown"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select a Category
      </label>
      <select
        id="dropdown"
        onChange={(e) => setPlatform(parseInt(e.target.value))}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
      >
        <option value="" >
          All
        </option>
        {data?.results.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
