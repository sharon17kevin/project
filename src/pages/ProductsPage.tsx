import Footer from "../components/Footer";
import CategorySelector from "../components/products/CategorySelector";
import ProductSection from "../components/products/ProductSection";
import SortSelector from "../components/products/SortSelector";
import useProductQueryStore from "../zustand/productQueryStore";

const ProductsPage = () => {
  const productQuery = useProductQueryStore((s) => s.productQuery);
  return (
    <div className="min-h-screen bg-primary">
      {/* Title Section */}
      <div className="w-full bg-white flex flex-col justify-center px-10 py-5">
        <p>{`Based on the "${productQuery.searchText}" search`}</p>
        <div className="flex space-x-3">
          <CategorySelector />
          <SortSelector />
        </div>
      </div>

      {/* Products Section */}
      <ProductSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
