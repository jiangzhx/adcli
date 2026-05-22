// Generated from oceanengine/ad_open_sdk_go models/model_tools_asset_link_list_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { ToolsAssetLinkListV30DataListAccountType, ToolsAssetLinkListV30DataListActiveStatus } from "../models/index";

export interface ToolsAssetLinkListV30ResponseDataListInner {
  account_id?: number | string;
  account_type?: ToolsAssetLinkListV30DataListAccountType;
  active_status?: ToolsAssetLinkListV30DataListActiveStatus;
  advertiser_id?: number | string;
  app_id?: string;
  create_time?: string;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  link?: string;
  link_id?: number | string;
  link_remark?: string;
  modify_time?: string;
  start_page?: string;
  start_param?: string;
}

