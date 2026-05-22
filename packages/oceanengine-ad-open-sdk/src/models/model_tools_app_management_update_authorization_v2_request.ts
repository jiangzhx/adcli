// Generated from oceanengine/ad_open_sdk_go models/model_tools_app_management_update_authorization_v2_request.go
// Do not edit manually.

import type { ToolsAppManagementUpdateAuthorizationV2OperationType } from "../models/index";

export interface ToolsAppManagementUpdateAuthorizationV2Request {
  advertiser_id: number | string;
  advertiser_ids: (number | string)[];
  basic_package_id: string;
  operation_type: ToolsAppManagementUpdateAuthorizationV2OperationType;
}

