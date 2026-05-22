// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpWechatGameUpdateV30AccountType, ToolsEbpWechatGameUpdateV30RequestExtra, ToolsEbpWechatGameUpdateV30RequestHead, ToolsEbpWechatGameUpdateV30RequestIcon, ToolsEbpWechatGameUpdateV30RequestMaterialInner, ToolsEbpWechatGameUpdateV30RequestQualificationsInner, ToolsEbpWechatGameUpdateV30RequestSubject } from "../models";

export interface ToolsEbpWechatGameUpdateV30Request {
  account_id: number;
  account_type: ToolsEbpWechatGameUpdateV30AccountType;
  data: Record<string, unknown>;
  extra: ToolsEbpWechatGameUpdateV30RequestExtra;
  guide_copy: string;
  head: ToolsEbpWechatGameUpdateV30RequestHead;
  icon: ToolsEbpWechatGameUpdateV30RequestIcon;
  instance_id: number;
  introduction: string;
  label: string[];
  material: ToolsEbpWechatGameUpdateV30RequestMaterialInner[];
  path: string;
  qualifications: ToolsEbpWechatGameUpdateV30RequestQualificationsInner[];
  subject: ToolsEbpWechatGameUpdateV30RequestSubject;
  tag_info: string;
}

