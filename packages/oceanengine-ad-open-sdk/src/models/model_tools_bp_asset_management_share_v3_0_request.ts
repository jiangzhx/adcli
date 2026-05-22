// Generated from oceanengine/ad_open_sdk_go models/model_tools_bp_asset_management_share_v3_0_request.go
// Do not edit manually.

import type { ToolsBpAssetManagementShareV30AllAccountsByBp, ToolsBpAssetManagementShareV30AssetType, ToolsBpAssetManagementShareV30RequestAccountInfosInner, ToolsBpAssetManagementShareV30RequestAllAccountsByCompanyInner, ToolsBpAssetManagementShareV30ShareMode } from "../models/index";

export interface ToolsBpAssetManagementShareV30Request {
  account_infos?: ToolsBpAssetManagementShareV30RequestAccountInfosInner[];
  all_accounts_by_bp?: ToolsBpAssetManagementShareV30AllAccountsByBp[];
  all_accounts_by_company?: ToolsBpAssetManagementShareV30RequestAllAccountsByCompanyInner[];
  asset_type: ToolsBpAssetManagementShareV30AssetType;
  instance_id: number | string;
  organization_id: number | string;
  share_mode: ToolsBpAssetManagementShareV30ShareMode;
}

