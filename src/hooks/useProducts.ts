import { useInfiniteQuery } from "@tanstack/react-query";
import useProductQueryStore from "../zustand/productQueryStore";
import { FetchResponse } from "../services/api-client";
import productServices, { Product } from "../services/product-services";
import ms from 'ms'


const useProducts = () => {
    const productQuery = useProductQueryStore(s=>s.productQuery)
    return useInfiniteQuery<FetchResponse<Product>, Error>({
        initialPageParam: 1,
        queryKey: ['products', productQuery],
        queryFn: ( {pageParam = 1})=> 
            productServices.getAll(
                {params: {
                parent_platforms: productQuery.platformId, 
                ordering: productQuery.sortOrder, 
                search: productQuery.searchText,
                page: pageParam
            }}),
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next? allPages.length + 1 : undefined;
        }
        //keepPreviousData: true,
    })
}

export default useProducts;