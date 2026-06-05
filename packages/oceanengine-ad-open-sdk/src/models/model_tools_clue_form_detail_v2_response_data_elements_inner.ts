// 由 oceanengine/ad_open_sdk_go models/model_tools_clue_form_detail_v2_response_data_elements_inner.go 生成
// 不要手动编辑。

import type { ToolsClueFormDetailV2DataElementsAllowEmpty, ToolsClueFormDetailV2DataElementsIsUnique, ToolsClueFormDetailV2DataElementsType } from "../models/index";

export interface ToolsClueFormDetailV2ResponseDataElementsInner {
  allow_empty?: ToolsClueFormDetailV2DataElementsAllowEmpty;
  element_id?: number | string;
  is_unique?: ToolsClueFormDetailV2DataElementsIsUnique;
  label?: string;
  type?: ToolsClueFormDetailV2DataElementsType;
  value?: string;
}

