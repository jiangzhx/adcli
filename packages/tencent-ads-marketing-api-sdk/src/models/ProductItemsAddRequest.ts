// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ProductItemSpec, UsageInfo } from "../models";

export interface ProductItemsAddRequest {
  account_id?: number | string;
  product_catalog_id?: number | string;
  feed_id?: number | string;
  request_source?: string;
  usage_info?: UsageInfo;
  product_item_spec_list?: ProductItemSpec[];
}

