// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_asset_auth_v3_0_request_auth_targets_inner.go
// Do not edit manually.

import type { ToolsEbpAssetAuthV30AuthTargetsAuthTargetType, ToolsEbpAssetAuthV30AuthTargetsSubTarget } from "../models/index";

export interface ToolsEbpAssetAuthV30RequestAuthTargetsInner {
  auth_target_type: ToolsEbpAssetAuthV30AuthTargetsAuthTargetType;
  sub_target?: ToolsEbpAssetAuthV30AuthTargetsSubTarget[];
  target_id: number | string;
}

