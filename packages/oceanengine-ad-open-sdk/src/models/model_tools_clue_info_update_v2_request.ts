// 由 oceanengine/ad_open_sdk_go models/model_tools_clue_info_update_v2_request.go 生成
// 不要手动编辑。

import type { ToolsClueInfoUpdateV2RequestUpdateInfoInner } from "../models/index";

export interface ToolsClueInfoUpdateV2Request {
  advertiser_ids: (number | string)[];
  op_name?: string;
  update_info: ToolsClueInfoUpdateV2RequestUpdateInfoInner[];
}

