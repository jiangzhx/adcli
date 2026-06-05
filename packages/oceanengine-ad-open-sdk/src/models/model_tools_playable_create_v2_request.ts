// 由 oceanengine/ad_open_sdk_go models/model_tools_playable_create_v2_request.go 生成
// 不要手动编辑。

import type { ToolsPlayableCreateV2RequestSchemaDataInner } from "../models/index";

export interface ToolsPlayableCreateV2Request {
  advertiser_id: number | string;
  schema_data: ToolsPlayableCreateV2RequestSchemaDataInner[];
  template_id: number | string;
}

