// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ClueCouponUpdateV2RequestGlobalLimit, ClueCouponUpdateV2RequestUserLimit, ClueCouponUpdateV2Status } from "../models";

export interface ClueCouponUpdateV2Request {
  activity_id: number;
  advertiser_id: number;
  deliver_end?: string;
  deliver_start?: string;
  global_limit?: ClueCouponUpdateV2RequestGlobalLimit;
  status?: ClueCouponUpdateV2Status;
  user_limit?: ClueCouponUpdateV2RequestUserLimit;
}

