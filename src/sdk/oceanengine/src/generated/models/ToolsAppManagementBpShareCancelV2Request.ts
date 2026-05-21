// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAppManagementBpShareCancelV2RequestAccountInfosInner, ToolsAppManagementBpShareCancelV2RequestAllAccountByCompany, ToolsAppManagementBpShareCancelV2RequestAllAccountsInner, ToolsAppManagementBpShareCancelV2ShareMode } from "../models";

export interface ToolsAppManagementBpShareCancelV2Request {
  account_infos?: ToolsAppManagementBpShareCancelV2RequestAccountInfosInner[];
  all_account_by_company?: ToolsAppManagementBpShareCancelV2RequestAllAccountByCompany;
  all_accounts?: ToolsAppManagementBpShareCancelV2RequestAllAccountsInner[];
  organization_id: number;
  package_id: string;
  share_mode: ToolsAppManagementBpShareCancelV2ShareMode;
}

