// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponUpdateV2RequestGlobalLimit, ClueCouponUpdateV2RequestUserLimit, ClueCouponUpdateV2Status } from "../models";

export interface ClueCouponUpdateV2Request {
  activity_id: number;
  advertiser_id: number;
  deliver_end?: string | null;
  deliver_start?: string | null;
  global_limit?: ClueCouponUpdateV2RequestGlobalLimit;
  status?: ClueCouponUpdateV2Status;
  user_limit?: ClueCouponUpdateV2RequestUserLimit;
}

