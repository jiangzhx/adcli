// Generated from oceanengine/ad_open_sdk_go models/model_tools_material_raise_create_v3_0_request.go
// Do not edit manually.

import type { ToolsMaterialRaiseCreateV30RequestRaiseInfo } from "../models/index";

export interface ToolsMaterialRaiseCreateV30Request {
  advertiser_id: number | string;
  material_ids?: number | string[];
  project_id: number | string;
  raise_info: ToolsMaterialRaiseCreateV30RequestRaiseInfo;
}

