// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_items_add_request.go
// Do not edit manually.

import type { ProductItemSpec, UsageInfo } from "../v3/index";

export interface ProductItemsAddRequest {
  account_id?: number | string;
  product_catalog_id?: number | string;
  feed_id?: number | string;
  request_source?: string;
  usage_info?: UsageInfo;
  product_item_spec_list?: ProductItemSpec[];
}

