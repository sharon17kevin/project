import APIClient from "./api-client";

export interface Product {
    id: number;
    name: string;
    description_raw: string;

}

export default new APIClient<Product>('/games')