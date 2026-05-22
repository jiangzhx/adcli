// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_asset_auth_list_v3_0_response_data_authorizations_inner.go
// Do not edit manually.

import type { ToolsEbpAssetAuthListV30ResponseDataAuthorizationsInnerAccount, ToolsEbpAssetAuthListV30ResponseDataAuthorizationsInnerAuthTarget } from "../models/index";

export interface ToolsEbpAssetAuthListV30ResponseDataAuthorizationsInner {
  account: ToolsEbpAssetAuthListV30ResponseDataAuthorizationsInnerAccount;
  account_depth?: number;
  auth_target: ToolsEbpAssetAuthListV30ResponseDataAuthorizationsInnerAuthTarget;
  id?: number | string;
  is_default_auth?: boolean;
}

