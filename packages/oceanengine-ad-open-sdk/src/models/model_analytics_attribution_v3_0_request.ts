// 由 oceanengine/ad_open_sdk_go models/model_analytics_attribution_v3_0_request.go 生成
// 不要手动编辑。

import type { AnalyticsAttributionV30RequestContext, AnalyticsAttributionV30RequestProperties } from "../models/index";

export interface AnalyticsAttributionV30Request {
  app_id: number | string;
  attribute_label?: string;
  biz_type?: number;
  context?: AnalyticsAttributionV30RequestContext;
  event_type?: string;
  properties?: AnalyticsAttributionV30RequestProperties;
  source?: string;
  timestamp?: number;
}

