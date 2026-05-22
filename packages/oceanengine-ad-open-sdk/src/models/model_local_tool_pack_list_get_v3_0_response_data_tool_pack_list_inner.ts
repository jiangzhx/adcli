// Generated from oceanengine/ad_open_sdk_go models/model_local_tool_pack_list_get_v3_0_response_data_tool_pack_list_inner.go
// Do not edit manually.

import type { LocalToolPackListGetV30DataToolPackListToolPackTypes } from "../models/index";

export interface LocalToolPackListGetV30ResponseDataToolPackListInner {
  enable?: boolean;
  enable_intelligent_selection?: boolean;
  tool_pack_id?: number | string;
  tool_pack_name?: string;
  tool_pack_types?: LocalToolPackListGetV30DataToolPackListToolPackTypes[];
}

