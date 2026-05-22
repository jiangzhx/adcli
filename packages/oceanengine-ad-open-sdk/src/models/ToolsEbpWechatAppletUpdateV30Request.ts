// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpWechatAppletUpdateV30AccountType, ToolsEbpWechatAppletUpdateV30RequestHead, ToolsEbpWechatAppletUpdateV30RequestIcon, ToolsEbpWechatAppletUpdateV30RequestMaterialInner } from "../models";

export interface ToolsEbpWechatAppletUpdateV30Request {
  account_id: number | string;
  account_type: ToolsEbpWechatAppletUpdateV30AccountType;
  data: Record<string, unknown>;
  guide_copy?: string;
  head?: ToolsEbpWechatAppletUpdateV30RequestHead;
  icon: ToolsEbpWechatAppletUpdateV30RequestIcon;
  instance_id: number | string;
  introduction?: string;
  label?: string[];
  material?: ToolsEbpWechatAppletUpdateV30RequestMaterialInner[];
  path?: string;
  remark?: string;
  tag_info: string;
}

