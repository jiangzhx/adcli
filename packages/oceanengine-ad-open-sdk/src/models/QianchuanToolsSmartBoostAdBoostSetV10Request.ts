// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanToolsSmartBoostAdBoostSetV10OptType } from "../models";

export interface QianchuanToolsSmartBoostAdBoostSetV10Request {
  ad_id: number | string;
  advertiser_id: number | string;
  budget?: number;
  opt_type: QianchuanToolsSmartBoostAdBoostSetV10OptType;
  raise_duration?: number;
  raise_time?: string;
}

