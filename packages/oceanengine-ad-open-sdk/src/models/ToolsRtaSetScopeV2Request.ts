// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsRtaSetScopeV2AccountType, ToolsRtaSetScopeV2TargetType } from "../models";

export interface ToolsRtaSetScopeV2Request {
  account_type?: ToolsRtaSetScopeV2AccountType;
  advertiser_id: number;
  rta_id: number;
  target_ids?: number[];
  target_type?: ToolsRtaSetScopeV2TargetType;
}

