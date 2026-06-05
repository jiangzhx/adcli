// 由 oceanengine/ad_open_sdk_go models/model_report_audience_aweme_list_v2_filtering.go 生成
// 不要手动编辑。

import type { ReportAudienceAwemeListV2FilteringAudienceLevel, ReportAudienceAwemeListV2FilteringBehaviors } from "../models/index";

export interface ReportAudienceAwemeListV2Filtering {
  ad_ids?: (number | string)[];
  audience_level?: ReportAudienceAwemeListV2FilteringAudienceLevel;
  behaviors?: ReportAudienceAwemeListV2FilteringBehaviors[];
  campaign_ids?: (number | string)[];
}

