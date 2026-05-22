// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_update_item.go
// Do not edit manually.

import type { ProductSaleOnlineStatus } from "../model/index";

export interface ProductUpdateItem {
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
}

