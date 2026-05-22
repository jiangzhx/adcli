// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_sharing_update_request.go
// Do not edit manually.

import type { SharedAccountStruct } from "../v3/index";

export interface ComponentSharingUpdateRequest {
  organization_id?: number | string;
  shared_account_list?: SharedAccountStruct[];
  component_id?: number | string;
}

