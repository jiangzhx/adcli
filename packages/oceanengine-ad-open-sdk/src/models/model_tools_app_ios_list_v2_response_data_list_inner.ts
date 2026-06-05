// 由 oceanengine/ad_open_sdk_go models/model_tools_app_ios_list_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ToolsAppIosListV2DataListStatus } from "../models/index";

export interface ToolsAppIosListV2ResponseDataListInner {
  app_name?: string;
  download_url?: string;
  icon_url?: string;
  itunes_id?: number | string;
  package_id?: number | string;
  package_name?: string;
  status?: ToolsAppIosListV2DataListStatus;
  version?: string;
}

