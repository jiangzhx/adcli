// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportRtaGetV2ResponseDataListInnerMetrics } from "../models";

export interface ReportRtaGetV2ResponseDataListInner {
  ad_id?: number | string;
  advertiser_id?: number | string;
  campaign_id?: number | string;
  creative_id?: number | string;
  is_rta_bid?: number;
  metrics?: ReportRtaGetV2ResponseDataListInnerMetrics;
  platform?: string;
  stat_time?: string;
  stat_time_day?: string;
}

