// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaDetailGetV2FilteringAuditStatus, DpaDetailGetV2FilteringIsRecommend, DpaDetailGetV2FilteringStatus } from "../models";

export interface DpaDetailGetV2Filtering {
  audit_status?: DpaDetailGetV2FilteringAuditStatus;
  dpa_categories?: number[];
  is_recommend?: DpaDetailGetV2FilteringIsRecommend;
  product_id?: number;
  product_name?: string;
  spu_id?: string;
  status?: DpaDetailGetV2FilteringStatus;
}

