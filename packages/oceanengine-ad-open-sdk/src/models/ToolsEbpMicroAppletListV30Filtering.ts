// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpMicroAppletListV30FilteringAssetOwnership, ToolsEbpMicroAppletListV30FilteringAuditStatus } from "../models";

export interface ToolsEbpMicroAppletListV30Filtering {
  asset_ownership: ToolsEbpMicroAppletListV30FilteringAssetOwnership;
  audit_status?: ToolsEbpMicroAppletListV30FilteringAuditStatus;
  instance_ids?: number | string[];
  search_key?: string;
}

