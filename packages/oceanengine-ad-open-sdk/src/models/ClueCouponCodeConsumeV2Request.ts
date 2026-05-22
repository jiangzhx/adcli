// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponCodeConsumeV2RequestEmployee } from "../models";

export interface ClueCouponCodeConsumeV2Request {
  activity_id?: number | string;
  advertiser_id: number | string;
  code?: string;
  code_id?: string;
  coupon_id?: number | string;
  employee: ClueCouponCodeConsumeV2RequestEmployee;
  extra?: Record<string, unknown>;
  resource_id?: number | string;
}

