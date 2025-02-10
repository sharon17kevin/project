import useProductQueryStore from "../../zustand/productQueryStore";

const SortSelector = () => {
  const selectedSort = useProductQueryStore((s) => s.productQuery.sortOrder);
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  
  return (
    <div className="w-64">
      <label
        htmlFor="dropdown"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Ordered by:
      </label>
      <select
        id="dropdown"
        onChange={(e) => setSortOrder(e.target.value)}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
      >
        {sortOrders.map((order) => (
          <option value={order.value} key={order.value}>
            {order.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelector;
