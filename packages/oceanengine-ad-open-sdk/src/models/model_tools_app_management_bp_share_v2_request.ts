// Generated from oceanengine/ad_open_sdk_go models/model_tools_app_management_bp_share_v2_request.go
// Do not edit manually.

import type { ToolsAppManagementBpShareV2RequestAccountInfosInner, ToolsAppManagementBpShareV2RequestAllAccountByCompany, ToolsAppManagementBpShareV2RequestAllAccountsInner, ToolsAppManagementBpShareV2ShareMode } from "../models/index";

export interface ToolsAppManagementBpShareV2Request {
  account_infos?: ToolsAppManagementBpShareV2RequestAccountInfosInner[];
  all_account_by_company?: ToolsAppManagementBpShareV2RequestAllAccountByCompany;
  all_accounts?: ToolsAppManagementBpShareV2RequestAllAccountsInner[];
  organization_id: number | string;
  package_id: string;
  share_mode: ToolsAppManagementBpShareV2ShareMode;
}

