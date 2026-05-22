// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpWechatAppletListV30DataAppletsAccountType, ToolsEbpWechatAppletListV30DataAppletsAuditStatus, ToolsEbpWechatAppletListV30ResponseDataAppletsInnerExtra, ToolsEbpWechatAppletListV30ResponseDataAppletsInnerHead, ToolsEbpWechatAppletListV30ResponseDataAppletsInnerIcon, ToolsEbpWechatAppletListV30ResponseDataAppletsInnerMaterialInner, ToolsEbpWechatAppletListV30ResponseDataAppletsInnerQualificationsInner } from "../models";

export interface ToolsEbpWechatAppletListV30ResponseDataAppletsInner {
  account_id?: number | string;
  account_type: ToolsEbpWechatAppletListV30DataAppletsAccountType;
  audit_status?: ToolsEbpWechatAppletListV30DataAppletsAuditStatus;
  data?: Record<string, string>;
  extra: ToolsEbpWechatAppletListV30ResponseDataAppletsInnerExtra;
  guide_copy?: string;
  head?: ToolsEbpWechatAppletListV30ResponseDataAppletsInnerHead;
  icon?: ToolsEbpWechatAppletListV30ResponseDataAppletsInnerIcon;
  instance_id: number | string;
  introduction?: string;
  is_ebp_asset?: boolean;
  label?: string[];
  material?: ToolsEbpWechatAppletListV30ResponseDataAppletsInnerMaterialInner[];
  name: string;
  path: string;
  qualifications?: ToolsEbpWechatAppletListV30ResponseDataAppletsInnerQualificationsInner[];
  reason?: string;
  remark?: string;
  tag_info?: string;
  username: string;
}

