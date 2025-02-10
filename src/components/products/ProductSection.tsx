import InfiniteScroll from "react-infinite-scroll-component";
import useProducts from "../../hooks/useProducts";
import Skeleton from "../SkeletonCard";
import React from "react";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useProducts();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const fetchproductsCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if (error) return <p>{error.message}</p>;
  return (
    <section className=" bg-white ">
      <div className="max-w-7xl m-auto">
        <InfiniteScroll
          dataLength={fetchproductsCount}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={<p>Loading . . . </p>}
        >
          <div
            className="
            p-10
            grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4"
          >
            {isLoading &&
              skeletons.map((skeleton) => (
                <Skeleton
                  key={skeleton}
                  width="w-full"
                  height="h-60"
                  rounded="rounded-lg"
                />
              ))}
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((product) => (
                  <ProductCardContainer key={product.id}>
                    <ProductCard product={product} />
                  </ProductCardContainer>
                ))}
              </React.Fragment>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default ProductSection;
