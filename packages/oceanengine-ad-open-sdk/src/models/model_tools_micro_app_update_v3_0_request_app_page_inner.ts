// 由 oceanengine/ad_open_sdk_go models/model_tools_micro_app_update_v3_0_request_app_page_inner.go 生成
// 不要手动编辑。

import type { ToolsMicroAppUpdateV30AppPageOperateType } from "../models/index";

export interface ToolsMicroAppUpdateV30RequestAppPageInner {
  id?: number | string;
  link: string;
  operate_type: ToolsMicroAppUpdateV30AppPageOperateType;
  remark: string;
  start_page?: string;
  start_param?: string;
}

