// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponCodeConsumeV2RequestEmployee } from "../models";

export interface ClueCouponCodeConsumeV2Request {
  activity_id?: number;
  advertiser_id: number;
  code?: string;
  code_id?: string;
  coupon_id?: number;
  employee: ClueCouponCodeConsumeV2RequestEmployee;
  extra?: Record<string, unknown>;
  resource_id?: number;
}

