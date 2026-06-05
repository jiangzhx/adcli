// 由 oceanengine/ad_open_sdk_go models/model_tools_ebp_video_attributes_list_v3_0_filtering.go 生成
// 不要手动编辑。

import type { ToolsEbpVideoAttributesListV30FilteringMaterialProperties } from "../models/index";

export interface ToolsEbpVideoAttributesListV30Filtering {
  end_time?: string;
  material_ids?: (number | string)[];
  material_properties?: ToolsEbpVideoAttributesListV30FilteringMaterialProperties[];
  start_time?: string;
}

