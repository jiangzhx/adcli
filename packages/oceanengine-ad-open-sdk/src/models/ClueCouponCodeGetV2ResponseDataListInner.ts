// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponCodeGetV2DataListStatus } from "../models";

export interface ClueCouponCodeGetV2ResponseDataListInner {
  activity_id?: number | string;
  code?: string;
  code_id?: string;
  coupon_id?: number | string;
  create_time?: string;
  resource_id?: number | string;
  resource_title?: string;
  status?: ClueCouponCodeGetV2DataListStatus;
  update_time?: string;
  valid_end?: string;
  valid_start?: string;
}

