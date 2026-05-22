// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpMicroAppletLinkListV30DataLinksActiveStatus, ToolsEbpMicroAppletLinkListV30DataLinksAuditStatus, ToolsEbpMicroAppletLinkListV30DataLinksOwnerAccountType } from "../models";

export interface ToolsEbpMicroAppletLinkListV30ResponseDataLinksInner {
  active_status?: ToolsEbpMicroAppletLinkListV30DataLinksActiveStatus;
  app_id?: string;
  audit_status?: ToolsEbpMicroAppletLinkListV30DataLinksAuditStatus;
  create_time?: string;
  instance_id?: number;
  is_ebp_asset?: boolean;
  link?: string;
  link_id?: number;
  modify_time?: string;
  owner_account_id?: number;
  owner_account_type?: ToolsEbpMicroAppletLinkListV30DataLinksOwnerAccountType;
  remark?: string;
  start_page?: string;
  start_params?: string;
}

