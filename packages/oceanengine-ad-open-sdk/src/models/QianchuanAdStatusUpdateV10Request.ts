// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdStatusUpdateV10OptStatus } from "../models";

export interface QianchuanAdStatusUpdateV10Request {
  ad_ids: number[];
  advertiser_id: number;
  budget?: number;
  opt_status: QianchuanAdStatusUpdateV10OptStatus;
  revive_budget?: number;
  schedule_fixed_range?: number;
}

