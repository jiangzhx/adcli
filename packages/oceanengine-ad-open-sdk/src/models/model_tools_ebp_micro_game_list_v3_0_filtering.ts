// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_list_v3_0_filtering.go
// Do not edit manually.

import type { ToolsEbpMicroGameListV30FilteringAssetOwnership, ToolsEbpMicroGameListV30FilteringAuditStatus } from "../models/index";

export interface ToolsEbpMicroGameListV30Filtering {
  asset_ownership?: ToolsEbpMicroGameListV30FilteringAssetOwnership;
  audit_status?: ToolsEbpMicroGameListV30FilteringAuditStatus;
  instance_ids?: (number | string)[];
  search_key?: string;
}

