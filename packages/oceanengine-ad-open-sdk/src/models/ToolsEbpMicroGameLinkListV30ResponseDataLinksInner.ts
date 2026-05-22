// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpMicroGameLinkListV30DataLinksActiveStatus, ToolsEbpMicroGameLinkListV30DataLinksAuditStatus, ToolsEbpMicroGameLinkListV30DataLinksOwnerAccountType } from "../models";

export interface ToolsEbpMicroGameLinkListV30ResponseDataLinksInner {
  active_status?: ToolsEbpMicroGameLinkListV30DataLinksActiveStatus;
  app_id?: string;
  audit_status?: ToolsEbpMicroGameLinkListV30DataLinksAuditStatus;
  create_time?: string;
  icon?: string;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  link?: string;
  link_id?: number | string;
  modify_time?: string;
  owner_account_id?: number | string;
  owner_account_type?: ToolsEbpMicroGameLinkListV30DataLinksOwnerAccountType;
  remark?: string;
  start_page?: string;
  start_params?: string;
}

