// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_tools_smart_boost_ad_boost_set_v1_0_request.go
// Do not edit manually.

import type { QianchuanToolsSmartBoostAdBoostSetV10OptType } from "../models/index";

export interface QianchuanToolsSmartBoostAdBoostSetV10Request {
  ad_id: number | string;
  advertiser_id: number | string;
  budget?: number;
  opt_type: QianchuanToolsSmartBoostAdBoostSetV10OptType;
  raise_duration?: number;
  raise_time?: string;
}

