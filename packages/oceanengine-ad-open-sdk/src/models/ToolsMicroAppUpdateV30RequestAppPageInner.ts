// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMicroAppUpdateV30AppPageOperateType } from "../models";

export interface ToolsMicroAppUpdateV30RequestAppPageInner {
  id?: number | string;
  link: string;
  operate_type: ToolsMicroAppUpdateV30AppPageOperateType;
  remark: string;
  start_page?: string;
  start_param?: string;
}

