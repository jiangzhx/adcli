// Generated from oceanengine/ad_open_sdk_go models/model_clue_coupon_code_consume_v2_request.go
// Do not edit manually.

import type { ClueCouponCodeConsumeV2RequestEmployee } from "../models/index";

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

