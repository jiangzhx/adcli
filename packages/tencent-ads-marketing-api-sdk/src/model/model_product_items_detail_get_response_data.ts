// Generated from tencentad/marketing-api-go-sdk pkg/model/model_product_items_detail_get_response_data.go
// Do not edit manually.

import type { AuditStatus, ProductItemSpec } from "../model/index";

export interface ProductItemsDetailGetResponseData {
  feed_id?: number | string;
  system_status?: AuditStatus;
  reject_message?: string;
  product_item_spec?: ProductItemSpec;
}

