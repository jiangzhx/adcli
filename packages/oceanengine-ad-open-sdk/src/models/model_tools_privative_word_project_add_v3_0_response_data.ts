// 由 oceanengine/ad_open_sdk_go models/model_tools_privative_word_project_add_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ToolsPrivativeWordProjectAddV30ResponseDataErrorListInner } from "../models/index";

export interface ToolsPrivativeWordProjectAddV30ResponseData {
  error_list?: ToolsPrivativeWordProjectAddV30ResponseDataErrorListInner[];
  project_error_list?: number[];
  project_list?: Record<string, unknown>[];
}

