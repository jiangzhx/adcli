// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAudienceListGetV10FilteringAudienceType } from "../models";

export interface QianchuanAudienceListGetV10Filtering {
  audience_id?: number[];
  audience_name?: string;
  audience_type?: QianchuanAudienceListGetV10FilteringAudienceType[];
  end_time?: string;
  start_time?: string;
  status?: number[];
}

