import type { ProductSaleOnlineStatus, ProductVisibility } from "../model/index";
export interface ProductItemsUpdateRequest {
    account_id?: number | string;
    catalog_id?: number | string;
    product_outer_id?: string;
    price?: number;
    sale_price?: number;
    price_pc?: number;
    price_mobile?: number;
    price_app?: number;
    stock_volume?: number;
    discount?: number;
    expiration_time?: number;
    product_sale_status?: ProductSaleOnlineStatus;
    product_visibility?: ProductVisibility;
}
