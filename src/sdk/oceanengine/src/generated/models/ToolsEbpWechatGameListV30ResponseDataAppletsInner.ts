// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpWechatGameListV30DataAppletsAccountType, ToolsEbpWechatGameListV30DataAppletsAuditStatus, ToolsEbpWechatGameListV30ResponseDataAppletsInnerExtra, ToolsEbpWechatGameListV30ResponseDataAppletsInnerHead, ToolsEbpWechatGameListV30ResponseDataAppletsInnerIcon, ToolsEbpWechatGameListV30ResponseDataAppletsInnerMaterialInner } from "../models";

export interface ToolsEbpWechatGameListV30ResponseDataAppletsInner {
  account_id: number;
  account_type: ToolsEbpWechatGameListV30DataAppletsAccountType;
  audit_status?: ToolsEbpWechatGameListV30DataAppletsAuditStatus;
  data?: Record<string, string>;
  extra: ToolsEbpWechatGameListV30ResponseDataAppletsInnerExtra;
  guide_copy?: string;
  head?: ToolsEbpWechatGameListV30ResponseDataAppletsInnerHead;
  icon?: ToolsEbpWechatGameListV30ResponseDataAppletsInnerIcon;
  instance_id: number;
  introduction?: string;
  is_ebp_asset?: boolean;
  label?: string[];
  material?: ToolsEbpWechatGameListV30ResponseDataAppletsInnerMaterialInner[];
  name: string;
  path: string;
  reason?: string;
  remark?: string;
  tag_info?: string;
  username: string;
}

