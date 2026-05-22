// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpWechatAppletCreateV30AccountType, ToolsEbpWechatAppletCreateV30RequestExtra, ToolsEbpWechatAppletCreateV30RequestHead, ToolsEbpWechatAppletCreateV30RequestIcon, ToolsEbpWechatAppletCreateV30RequestMaterialInner } from "../models";

export interface ToolsEbpWechatAppletCreateV30Request {
  account_id: number;
  account_type: ToolsEbpWechatAppletCreateV30AccountType;
  data?: Record<string, string>;
  extra?: ToolsEbpWechatAppletCreateV30RequestExtra;
  guide_copy?: string;
  head?: ToolsEbpWechatAppletCreateV30RequestHead;
  icon?: ToolsEbpWechatAppletCreateV30RequestIcon;
  introduction?: string;
  label?: string[];
  material?: ToolsEbpWechatAppletCreateV30RequestMaterialInner[];
  name: string;
  path: string;
  remark?: string;
  tag_info?: string;
  unite_flag?: boolean;
  username: string;
}

