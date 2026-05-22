// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportRtaGetV2ResponseDataListInnerMetrics } from "../models";

export interface ReportRtaGetV2ResponseDataListInner {
  ad_id?: number;
  advertiser_id?: number;
  campaign_id?: number;
  creative_id?: number;
  is_rta_bid?: number;
  metrics?: ReportRtaGetV2ResponseDataListInnerMetrics;
  platform?: string;
  stat_time?: string;
  stat_time_day?: string;
}

