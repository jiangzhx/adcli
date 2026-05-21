// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAssetLinkListV30DataListAccountType, ToolsAssetLinkListV30DataListActiveStatus } from "../models";

export interface ToolsAssetLinkListV30ResponseDataListInner {
  account_id?: number;
  account_type?: ToolsAssetLinkListV30DataListAccountType;
  active_status?: ToolsAssetLinkListV30DataListActiveStatus;
  advertiser_id?: number;
  app_id?: string;
  create_time?: string;
  instance_id?: number;
  is_ebp_asset?: boolean;
  link?: string;
  link_id?: number;
  link_remark?: string;
  modify_time?: string;
  start_page?: string;
  start_param?: string;
}

