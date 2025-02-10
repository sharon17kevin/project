import { Link } from "react-router-dom";
import { Product } from "../../services/product-services";
import construction from "../../assets/guysConstruct.webp";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden">
      <div className=" w-full h-3/5">
        <img
          src={construction}
          alt="Polygon Shape"
          className="w-full h-full object-cover clip-polygon"
        />
      </div>
      <div className="bg-primary w-full flex flex-col p-5 font-darkerGrotesque font-semibold">
        <h1 className="text-2xl mt-3">
          <Link to="/">{product.name}</Link>
        </h1>
        <p className="text-lg mt-1 font-ebgaramond font-light">{product. name.substring(0,10)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
