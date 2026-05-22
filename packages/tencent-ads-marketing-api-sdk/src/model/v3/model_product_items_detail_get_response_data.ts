// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_items_detail_get_response_data.go
// Do not edit manually.

import type { AuditStatus, ProductInfoSpec, ProductVerificationResult, SpuLinkStatus } from "../v3/index";

export interface ProductItemsDetailGetResponseData {
  feed_id?: number | string;
  system_status?: AuditStatus;
  reject_message?: string;
  spu_link_status?: SpuLinkStatus;
  product_verification_results?: ProductVerificationResult[];
  product_item_spec?: ProductInfoSpec;
}

