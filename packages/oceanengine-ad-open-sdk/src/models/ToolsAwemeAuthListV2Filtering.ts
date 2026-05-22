// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAwemeAuthListV2FilteringAuthStatus, ToolsAwemeAuthListV2FilteringAuthType, ToolsAwemeAuthListV2FilteringWarningTypes } from "../models";

export interface ToolsAwemeAuthListV2Filtering {
  auth_status?: ToolsAwemeAuthListV2FilteringAuthStatus[];
  auth_type?: ToolsAwemeAuthListV2FilteringAuthType[];
  aweme_ids?: string[];
  dpa_id?: number | string;
  item_ids?: number | string[];
  warning_types?: ToolsAwemeAuthListV2FilteringWarningTypes[];
}

