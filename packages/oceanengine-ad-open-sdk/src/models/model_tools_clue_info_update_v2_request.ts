// Generated from oceanengine/ad_open_sdk_go models/model_tools_clue_info_update_v2_request.go
// Do not edit manually.

import type { ToolsClueInfoUpdateV2RequestUpdateInfoInner } from "../models/index";

export interface ToolsClueInfoUpdateV2Request {
  advertiser_ids: (number | string)[];
  op_name?: string;
  update_info: ToolsClueInfoUpdateV2RequestUpdateInfoInner[];
}

