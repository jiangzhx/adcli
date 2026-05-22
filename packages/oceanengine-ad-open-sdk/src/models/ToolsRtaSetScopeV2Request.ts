// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsRtaSetScopeV2AccountType, ToolsRtaSetScopeV2TargetType } from "../models";

export interface ToolsRtaSetScopeV2Request {
  account_type?: ToolsRtaSetScopeV2AccountType;
  advertiser_id: number | string;
  rta_id: number | string;
  target_ids?: number | string[];
  target_type?: ToolsRtaSetScopeV2TargetType;
}

