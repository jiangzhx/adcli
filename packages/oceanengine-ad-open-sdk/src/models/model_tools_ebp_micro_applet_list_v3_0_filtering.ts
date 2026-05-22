// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_applet_list_v3_0_filtering.go
// Do not edit manually.

import type { ToolsEbpMicroAppletListV30FilteringAssetOwnership, ToolsEbpMicroAppletListV30FilteringAuditStatus } from "../models/index";

export interface ToolsEbpMicroAppletListV30Filtering {
  asset_ownership: ToolsEbpMicroAppletListV30FilteringAssetOwnership;
  audit_status?: ToolsEbpMicroAppletListV30FilteringAuditStatus;
  instance_ids?: (number | string)[];
  search_key?: string;
}

