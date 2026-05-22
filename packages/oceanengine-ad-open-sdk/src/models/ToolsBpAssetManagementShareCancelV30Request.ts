// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsBpAssetManagementShareCancelV30AllAccountsByBp, ToolsBpAssetManagementShareCancelV30AssetType, ToolsBpAssetManagementShareCancelV30RequestAccountInfosInner, ToolsBpAssetManagementShareCancelV30RequestAllAccountsByCompanyInner, ToolsBpAssetManagementShareCancelV30ShareMode } from "../models";

export interface ToolsBpAssetManagementShareCancelV30Request {
  account_infos?: ToolsBpAssetManagementShareCancelV30RequestAccountInfosInner[];
  all_accounts_by_bp?: ToolsBpAssetManagementShareCancelV30AllAccountsByBp[];
  all_accounts_by_company?: ToolsBpAssetManagementShareCancelV30RequestAllAccountsByCompanyInner[];
  asset_type: ToolsBpAssetManagementShareCancelV30AssetType;
  instance_id: number;
  organization_id: number;
  share_mode: ToolsBpAssetManagementShareCancelV30ShareMode;
}

