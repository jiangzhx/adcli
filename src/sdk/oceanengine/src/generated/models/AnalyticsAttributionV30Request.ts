// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AnalyticsAttributionV30RequestContext, AnalyticsAttributionV30RequestProperties } from "../models";

export interface AnalyticsAttributionV30Request {
  app_id: number;
  attribute_label?: string;
  biz_type?: number;
  context?: AnalyticsAttributionV30RequestContext;
  event_type?: string;
  properties?: AnalyticsAttributionV30RequestProperties;
  source?: string;
  timestamp?: number;
}

