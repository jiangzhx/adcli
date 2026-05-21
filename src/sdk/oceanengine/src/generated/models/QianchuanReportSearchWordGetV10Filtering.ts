// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanReportSearchWordGetV10FilteringMarketingGoal, QianchuanReportSearchWordGetV10FilteringRange, QianchuanReportSearchWordGetV10FilteringWordType } from "../models";

export interface QianchuanReportSearchWordGetV10Filtering {
  ad_ids?: number[];
  campaign_ids?: number[];
  keyword_merge?: boolean;
  marketing_goal: QianchuanReportSearchWordGetV10FilteringMarketingGoal;
  range?: QianchuanReportSearchWordGetV10FilteringRange;
  word?: string;
  word_type?: QianchuanReportSearchWordGetV10FilteringWordType;
}

