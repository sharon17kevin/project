import { create } from "zustand";

interface ProductQuery {
    platformId?: number;
    sortOrder?: string;
    searchText?: string | null;
  }
  
  export interface ProductQueryStore {
      productQuery: ProductQuery,
      search: (searchText: string)=>void;
      setPlatform: (platformId: number)=>void;
      setSortOrder: (sortOrder: string)=>void;
  }
  
  const useProductQueryStore = create<ProductQueryStore>(set=> ({
      productQuery: {} as ProductQuery,
      search: (searchText)=>(set(()=>({productQuery: {searchText}as ProductQuery}))),
      setPlatform: (platformId)=>set(store=>({productQuery: {...store.productQuery, platformId}})),
      setSortOrder: (sortOrder)=>set(store=>({productQuery: {...store.productQuery, sortOrder}}))
  }))
  
  export default useProductQueryStore;