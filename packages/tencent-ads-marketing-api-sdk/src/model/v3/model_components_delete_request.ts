// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_components_delete_request.go
// Do not edit manually.

import type { DeleteStrategy } from "../v3/index";

export interface ComponentsDeleteRequest {
  account_id?: number | string;
  component_id?: number | string;
  organization_id?: number | string;
  delete_strategy?: DeleteStrategy;
}

