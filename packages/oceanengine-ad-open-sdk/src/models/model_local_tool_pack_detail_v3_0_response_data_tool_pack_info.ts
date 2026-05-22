// Generated from oceanengine/ad_open_sdk_go models/model_local_tool_pack_detail_v3_0_response_data_tool_pack_info.go
// Do not edit manually.

import type { LocalToolPackDetailV30DataToolPackInfoToolPackTypes } from "../models/index";

export interface LocalToolPackDetailV30ResponseDataToolPackInfo {
  enable?: boolean;
  enable_intelligent_selection?: boolean;
  tool_pack_id?: number | string;
  tool_pack_name?: string;
  tool_pack_types?: LocalToolPackDetailV30DataToolPackInfoToolPackTypes[];
}

