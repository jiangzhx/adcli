// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { YuntuAudienceLabelCreateV30DataSource, YuntuAudienceLabelCreateV30RequestCalculateRule, YuntuAudienceLabelCreateV30ValidDay } from "../models";

export interface YuntuAudienceLabelCreateV30Request {
  calculate_rule: YuntuAudienceLabelCreateV30RequestCalculateRule;
  data_source: YuntuAudienceLabelCreateV30DataSource;
  description?: string;
  industry_id: number;
  name: string;
  service_provider_id: number;
  user_display_name: string;
  valid_day: YuntuAudienceLabelCreateV30ValidDay;
  yuntu_brand_id: number;
}

