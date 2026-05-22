// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_set_schemas_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PropertySetSchemasGetResponseData } from "../model/index";

export interface PropertySetSchemasGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PropertySetSchemasGetResponseData;
}

