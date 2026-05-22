// Generated from oceanengine/ad_open_sdk_go models/model_tools_bp_asset_management_share_cancel_v3_0_request.go
// Do not edit manually.

import type { ToolsBpAssetManagementShareCancelV30AllAccountsByBp, ToolsBpAssetManagementShareCancelV30AssetType, ToolsBpAssetManagementShareCancelV30RequestAccountInfosInner, ToolsBpAssetManagementShareCancelV30RequestAllAccountsByCompanyInner, ToolsBpAssetManagementShareCancelV30ShareMode } from "../models/index";

export interface ToolsBpAssetManagementShareCancelV30Request {
  account_infos?: ToolsBpAssetManagementShareCancelV30RequestAccountInfosInner[];
  all_accounts_by_bp?: ToolsBpAssetManagementShareCancelV30AllAccountsByBp[];
  all_accounts_by_company?: ToolsBpAssetManagementShareCancelV30RequestAllAccountsByCompanyInner[];
  asset_type: ToolsBpAssetManagementShareCancelV30AssetType;
  instance_id: number | string;
  organization_id: number | string;
  share_mode: ToolsBpAssetManagementShareCancelV30ShareMode;
}

