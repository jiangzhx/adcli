// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponCodeGetV2DataListStatus } from "../models";

export interface ClueCouponCodeGetV2ResponseDataListInner {
  activity_id?: number;
  code?: string;
  code_id?: string;
  coupon_id?: number;
  create_time?: string;
  resource_id?: number;
  resource_title?: string;
  status?: ClueCouponCodeGetV2DataListStatus;
  update_time?: string;
  valid_end?: string;
  valid_start?: string;
}

