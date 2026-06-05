// 由 oceanengine/ad_open_sdk_go models/model_tools_hot_material_derive_submit_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsHotMaterialDeriveSubmitV30ExcludeStrategies, ToolsHotMaterialDeriveSubmitV30Strategies } from "../models/index";

export interface ToolsHotMaterialDeriveSubmitV30Request {
  advertiser_id: number | string;
  element_ids?: (number | string)[];
  exclude_strategies?: ToolsHotMaterialDeriveSubmitV30ExcludeStrategies[];
  material_ids: (number | string)[];
  remove_ai_watermark?: boolean;
  sticker_element_ids?: (number | string)[];
  strategies?: ToolsHotMaterialDeriveSubmitV30Strategies[];
}

