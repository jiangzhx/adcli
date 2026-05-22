// Generated from tencentad/marketing-api-go-sdk pkg/model/model_creative_components_update_request.go
// Do not edit manually.

import type { CreativeComponentSpecStruct, CreativeComponentType } from "../model/index";

export interface CreativeComponentsUpdateRequest {
  account_id?: number | string;
  component_id?: number | string;
  component_type?: CreativeComponentType;
  component_spec?: CreativeComponentSpecStruct;
}

