// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_keyword_update_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectToolsKeywordUpdateV30RequestDeliverySetting, OcProjectToolsKeywordUpdateV30RequestKeywords } from "../models/index";

export interface OcProjectToolsKeywordUpdateV30Request {
  advertiser_id: number | string;
  delivery_setting?: OcProjectToolsKeywordUpdateV30RequestDeliverySetting;
  keywords?: OcProjectToolsKeywordUpdateV30RequestKeywords;
  name?: string;
  schedule_id: number | string;
}

