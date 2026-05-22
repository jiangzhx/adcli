// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_components_metadata_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ComponentsMetadataGetResponseData } from "../v3/index";

export interface ComponentsMetadataGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ComponentsMetadataGetResponseData;
}

