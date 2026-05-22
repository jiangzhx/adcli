// Generated from oceanengine/ad_open_sdk_go models/model_tools_app_management_bp_share_cancel_v2_request.go
// Do not edit manually.

import type { ToolsAppManagementBpShareCancelV2RequestAccountInfosInner, ToolsAppManagementBpShareCancelV2RequestAllAccountByCompany, ToolsAppManagementBpShareCancelV2RequestAllAccountsInner, ToolsAppManagementBpShareCancelV2ShareMode } from "../models/index";

export interface ToolsAppManagementBpShareCancelV2Request {
  account_infos?: ToolsAppManagementBpShareCancelV2RequestAccountInfosInner[];
  all_account_by_company?: ToolsAppManagementBpShareCancelV2RequestAllAccountByCompany;
  all_accounts?: ToolsAppManagementBpShareCancelV2RequestAllAccountsInner[];
  organization_id: number | string;
  package_id: string;
  share_mode: ToolsAppManagementBpShareCancelV2ShareMode;
}

