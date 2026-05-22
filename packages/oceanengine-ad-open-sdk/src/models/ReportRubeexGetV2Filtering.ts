// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportRubeexGetV2FilteringAppCode, ReportRubeexGetV2FilteringDataScope, ReportRubeexGetV2FilteringOsType, ReportRubeexGetV2FilteringPlayableType, ReportRubeexGetV2FilteringType } from "../models";

export interface ReportRubeexGetV2Filtering {
  ad_ids?: number | string[];
  app_code?: ReportRubeexGetV2FilteringAppCode;
  campaign_ids?: number | string[];
  creative_ids?: number | string[];
  data_md5?: string;
  data_scope?: ReportRubeexGetV2FilteringDataScope;
  os_type?: ReportRubeexGetV2FilteringOsType;
  playable_type?: ReportRubeexGetV2FilteringPlayableType;
  type?: ReportRubeexGetV2FilteringType;
}

