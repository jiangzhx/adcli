// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_material_auth_delete_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpMaterialAuthDeleteV30AccountType } from "../models/index";

export interface ToolsEbpMaterialAuthDeleteV30Request {
  account_id: number | string;
  account_type?: ToolsEbpMaterialAuthDeleteV30AccountType;
  auth_ids: number | string[];
}

