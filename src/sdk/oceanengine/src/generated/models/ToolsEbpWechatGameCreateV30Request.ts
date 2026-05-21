// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpWechatGameCreateV30AccountType, ToolsEbpWechatGameCreateV30RequestExtra, ToolsEbpWechatGameCreateV30RequestHead, ToolsEbpWechatGameCreateV30RequestIcon, ToolsEbpWechatGameCreateV30RequestMaterialInner } from "../models";

export interface ToolsEbpWechatGameCreateV30Request {
  account_id: number;
  account_type: ToolsEbpWechatGameCreateV30AccountType;
  data?: Record<string, string>;
  extra?: ToolsEbpWechatGameCreateV30RequestExtra;
  guide_copy?: string;
  head?: ToolsEbpWechatGameCreateV30RequestHead;
  icon?: ToolsEbpWechatGameCreateV30RequestIcon;
  instance_id?: number;
  introduction?: string;
  label?: string[];
  material?: ToolsEbpWechatGameCreateV30RequestMaterialInner[];
  name: string;
  path: string;
  remark?: string;
  tag_info?: string;
  unite_flag?: boolean;
  username: string;
}

