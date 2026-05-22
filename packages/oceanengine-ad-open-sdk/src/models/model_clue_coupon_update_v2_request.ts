// Generated from oceanengine/ad_open_sdk_go models/model_clue_coupon_update_v2_request.go
// Do not edit manually.

import type { ClueCouponUpdateV2RequestGlobalLimit, ClueCouponUpdateV2RequestUserLimit, ClueCouponUpdateV2Status } from "../models/index";

export interface ClueCouponUpdateV2Request {
  activity_id: number | string;
  advertiser_id: number | string;
  deliver_end?: string | null;
  deliver_start?: string | null;
  global_limit?: ClueCouponUpdateV2RequestGlobalLimit;
  status?: ClueCouponUpdateV2Status;
  user_limit?: ClueCouponUpdateV2RequestUserLimit;
}

