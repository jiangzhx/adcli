// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_search_word_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanReportSearchWordGetV10FilteringMarketingGoal, QianchuanReportSearchWordGetV10FilteringRange, QianchuanReportSearchWordGetV10FilteringWordType } from "../models/index";

export interface QianchuanReportSearchWordGetV10Filtering {
  ad_ids?: (number | string)[];
  campaign_ids?: (number | string)[];
  keyword_merge?: boolean;
  marketing_goal: QianchuanReportSearchWordGetV10FilteringMarketingGoal;
  range?: QianchuanReportSearchWordGetV10FilteringRange;
  word?: string;
  word_type?: QianchuanReportSearchWordGetV10FilteringWordType;
}

