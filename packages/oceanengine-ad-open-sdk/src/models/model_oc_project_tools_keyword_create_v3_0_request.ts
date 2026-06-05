// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_keyword_create_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectToolsKeywordCreateV30RequestDeliverySetting, OcProjectToolsKeywordCreateV30RequestKeywords } from "../models/index";

export interface OcProjectToolsKeywordCreateV30Request {
  advertiser_id: number | string;
  delivery_setting: OcProjectToolsKeywordCreateV30RequestDeliverySetting;
  keywords: OcProjectToolsKeywordCreateV30RequestKeywords;
  name?: string;
  project_id: number | string;
}

