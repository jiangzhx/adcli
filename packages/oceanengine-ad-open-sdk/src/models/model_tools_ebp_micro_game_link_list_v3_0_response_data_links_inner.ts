// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_link_list_v3_0_response_data_links_inner.go
// Do not edit manually.

import type { ToolsEbpMicroGameLinkListV30DataLinksActiveStatus, ToolsEbpMicroGameLinkListV30DataLinksAuditStatus, ToolsEbpMicroGameLinkListV30DataLinksOwnerAccountType } from "../models/index";

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

