// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_depends_get_response_data.go
// Do not edit manually.

import type { ComponentDependItem, ComponentType } from "../v3/index";

export interface ComponentDependsGetResponseData {
  component_type?: ComponentType;
  component_name?: string;
  component_depends?: ComponentDependItem[];
}

