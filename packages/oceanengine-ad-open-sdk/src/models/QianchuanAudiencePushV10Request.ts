// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAudiencePushV10AccountType } from "../models";

export interface QianchuanAudiencePushV10Request {
  account_type: QianchuanAudiencePushV10AccountType;
  adv_ids?: number | string[];
  advertiser_id: number | string;
  audience_id: number | string;
  is_for_brand?: number;
}

