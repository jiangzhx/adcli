// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_asset_auth_v3_0_response_data_failed_records_inner.go
// Do not edit manually.

import type { ToolsEbpAssetAuthV30ResponseDataFailedRecordsInnerAccount, ToolsEbpAssetAuthV30ResponseDataFailedRecordsInnerAssetScope, ToolsEbpAssetAuthV30ResponseDataFailedRecordsInnerAuthTarget } from "../models/index";

export interface ToolsEbpAssetAuthV30ResponseDataFailedRecordsInner {
  account: ToolsEbpAssetAuthV30ResponseDataFailedRecordsInnerAccount;
  account_depth?: number;
  asset_scope: ToolsEbpAssetAuthV30ResponseDataFailedRecordsInnerAssetScope;
  auth_target: ToolsEbpAssetAuthV30ResponseDataFailedRecordsInnerAuthTarget;
  id?: number | string;
  is_default_auth?: boolean;
}

