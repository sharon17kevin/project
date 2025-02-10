import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
  return (
    <div
      className="rounded-md overflow-hidden hover:scale-105 transition-transform duration-150 ease-in"
    >
      {children}
    </div>
  );
};

export default ProductCardContainer;
