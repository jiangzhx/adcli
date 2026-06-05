// 由 oceanengine/ad_open_sdk_go models/model_report_rta_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ReportRtaGetV2ResponseDataListInnerMetrics } from "../models/index";

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

