// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_material_auth_create_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpMaterialAuthCreateV30AccountType, ToolsEbpMaterialAuthCreateV30MaterialType, ToolsEbpMaterialAuthCreateV30RequestTargetEbpsInner } from "../models/index";

export interface ToolsEbpMaterialAuthCreateV30Request {
  account_id: number | string;
  account_type?: ToolsEbpMaterialAuthCreateV30AccountType;
  material_type?: ToolsEbpMaterialAuthCreateV30MaterialType;
  target_ebps: ToolsEbpMaterialAuthCreateV30RequestTargetEbpsInner[];
}

