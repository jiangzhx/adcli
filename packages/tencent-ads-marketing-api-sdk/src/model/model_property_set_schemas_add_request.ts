// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_set_schemas_add_request.go
// Do not edit manually.

import type { PropertySetUserIdType, Schema } from "../model/index";

export interface PropertySetSchemasAddRequest {
  account_id?: number | string;
  property_set_id?: number | string;
  user_id_type?: PropertySetUserIdType;
  schemas?: Schema[];
}

