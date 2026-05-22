// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_applet_link_list_v3_0_response_data_links_inner.go
// Do not edit manually.

import type { ToolsEbpMicroAppletLinkListV30DataLinksActiveStatus, ToolsEbpMicroAppletLinkListV30DataLinksAuditStatus, ToolsEbpMicroAppletLinkListV30DataLinksOwnerAccountType } from "../models/index";

export interface ToolsEbpMicroAppletLinkListV30ResponseDataLinksInner {
  active_status?: ToolsEbpMicroAppletLinkListV30DataLinksActiveStatus;
  app_id?: string;
  audit_status?: ToolsEbpMicroAppletLinkListV30DataLinksAuditStatus;
  create_time?: string;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  link?: string;
  link_id?: number | string;
  modify_time?: string;
  owner_account_id?: number | string;
  owner_account_type?: ToolsEbpMicroAppletLinkListV30DataLinksOwnerAccountType;
  remark?: string;
  start_page?: string;
  start_params?: string;
}

