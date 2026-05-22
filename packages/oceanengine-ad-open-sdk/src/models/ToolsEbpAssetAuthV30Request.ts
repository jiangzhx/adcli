// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpAssetAuthV30AccountType, ToolsEbpAssetAuthV30RequestAssetsInner, ToolsEbpAssetAuthV30RequestAuthTargetsInner } from "../models";

export interface ToolsEbpAssetAuthV30Request {
  account_id: number | string;
  account_type: ToolsEbpAssetAuthV30AccountType;
  assets: ToolsEbpAssetAuthV30RequestAssetsInner[];
  auth_targets: ToolsEbpAssetAuthV30RequestAuthTargetsInner[];
}

