// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_items_update_request.go
// Do not edit manually.

import type { ProductSaleStatus, ProductVisibility } from "../v3/index";

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
  expiration_time?: string;
  product_sale_status?: ProductSaleStatus;
  product_visibility?: ProductVisibility;
}

