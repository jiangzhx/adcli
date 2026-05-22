// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_items_batch_update_request.go
// Do not edit manually.

import type { ProductUpdateItem } from "../model/index";

export interface ProductItemsBatchUpdateRequest {
  account_id?: number | string;
  catalog_id?: number | string;
  product_update_list?: ProductUpdateItem[];
}

