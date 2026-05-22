// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpProductListV30FilteringAuditStatus, DpaEbpProductListV30FilteringIsRecommend, DpaEbpProductListV30FilteringStatus } from "../models";

export interface DpaEbpProductListV30Filtering {
  audit_status?: DpaEbpProductListV30FilteringAuditStatus;
  dpa_categories?: number[];
  is_recommend?: DpaEbpProductListV30FilteringIsRecommend;
  product_id?: number | string;
  product_name?: string;
  spu_id?: string;
  status?: DpaEbpProductListV30FilteringStatus;
}

